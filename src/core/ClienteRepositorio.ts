import Client from "./Client";

export default interface ClienteRepositorio {
    salvar(cliente: Client): Promise<Client>
    excluir(cliente: Client): Promise<void>
    obterTodos(): Promise<Client[]>
}