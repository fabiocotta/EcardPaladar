import NavBar from "../../components/navbar/navbar";
import "./historico.css"
import {pedidos} from "../../dados/dados.js"



function Historico(){
    return <>
        <NavBar showMenu />
            <div className="container">
            <div className="titulo text-center">
                <h1>Histórico de Pedidos</h1>
            
            </div>

            <div className="box-pedido">
                <table className="table">
                    { 
                        pedidos.map( function(pedido){
                            return <tr key={pedido.id_pedido}>
                                <td><strong>Pedido {pedido.id_pedido}</strong></td>
                                <td className="text-light">Data {pedido.dt}</td>
                                <td className="text-green">Valor {new Intl.NumberFormat('pt-BR',
                                                                        {style: 'currency', currency: "BRL"}).format(pedido.total)}</td>
                            </tr>
                        })
                    }
                </table>
            </div>
        </div>
    </>

}

export default Historico;