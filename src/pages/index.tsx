import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Tabela from "../components/Table";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { 
      cliente, 
      clientes,
      novoCliente,
      salvarCliente, 
      selecionarCliente, 
      excluirCliente,
      tabelaVisivel,
      exibirTabela,
    } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Button cor="blue" className="mb-4" onClick={novoCliente}>Novo Cliente</Button>
            </div>
            <Tabela clientes={clientes}
              selectedClient={selecionarCliente}
              deletedClient={excluirCliente}
            />
          </>
        ) : (
          <Form 
            client={cliente} 
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
