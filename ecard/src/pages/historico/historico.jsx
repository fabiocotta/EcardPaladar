import NavBar from "../../components/navbar/navbar";
import "./historico.css";
import api from "../../services/api";
import { useEffect, useState } from "react";
import historicoPDF from "../../reports/historico/rphistorico";




function Historico(){

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        api.get("/pedidos")
            .then((resp) => {
                setPedidos(resp.data);

            })
            .catch((err) => {
                alert("Erro ao carregar histórico de pedidos")
            })
    }, []);

    return <>
        <NavBar showMenu />
            <div className="container">
            <div className="titulo text-center">
                <h1>Histórico de Pedidos</h1>
                <button onClick={(e) => historicoPDF(pedidos)} className="btn-pdf"><i className="fa-regular fa-file-pdf"></i>Gerar PDF</button>
            
            </div>

            <div className="box-pedido">
                <table className="table">
                    <tbody>
                    { 
                        pedidos.map( function(pedido){
                            return <tr key={pedido.id_pedido}>
                                <td><strong>Pedido {pedido.id_pedido}</strong></td>
                                <td className="text-light"> {pedido.dt_pedido}</td>
                                <td className="text-green"> {new Intl.NumberFormat('pt-BR',
                                                                        {style: 'currency', currency: "BRL"}).format(pedido.total)}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </>

}

export default Historico;