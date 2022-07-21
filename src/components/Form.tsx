import { useState } from 'react'
import Input from "./Input";
import Client from '../core/Client'
import Button from './Button';

interface FormProps {
    client: Client
    clienteMudou?: (cliente: Client) => void
    cancelado?: () => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id ?? null
    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Input 
                    readonly
                    text="Código" 
                    value={id} 
                    className="mb-5"
                />
            ) : false}
            <Input 
                text="Nome" 
                value={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Input 
                text="Idade" 
                type="number" 
                value={idade} 
                valorMudou={setIdade}
            />
            <div className='flex justify-end mt-7'>
                <Button cor='blue' className='mr-2' 
                    onClick={() => props.clienteMudou?.(new Client(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancelado}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}