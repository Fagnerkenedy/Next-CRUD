import Client from '../core/Client'
import { IconDelete, IconEdit } from './Icon'

interface TabelaProps {
    clientes: Client[]
    selectedClient?: (client: Client) => void
    deletedClient?: (client: Client) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.deletedClient || props.selectedClient

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false }
            </tr>
        )
    }

    function renderData() {
        return props.clientes?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.nome}</td>
                    <td className="text-left p-4">{client.idade}</td>
                    {exibirAcoes ? renderActions(client) : false }
                </tr>
            )
        })
    }

    function renderActions(client) {
        return (
            <td className='flex justify-center'>

                {props.selectedClient ? (
                    <button onClick={() => props.selectedClient?.(client)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50    
                    `}>
                        {IconEdit}
                    </button>
                ) : false}

                {props.selectedClient ? (
                    <button onClick={() => props.deletedClient?.(client)}  className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50    
                    `}>
                        {IconDelete}
                    </button>
                ) : false}

            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}