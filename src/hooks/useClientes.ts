import { useState, useEffect } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import Client from "../core/Client"
import ClienteRepositorio from '../core/ClienteRepositorio';
import useTabelaOuForm from './useTabelaOuForm';

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    const [cliente, setCliente] = useState<Client>(Client.vazio())
    const [clientes, setClientes] = useState<Client[]>([])
    
    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Client) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Client) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Client.vazio())
        exibirFormulario()
    }

    async function salvarCliente(cliente: Client) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela,
    }
}