import NavBar from "../../components/navbar/navbar.jsx";
//import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine";
import "./checkout.css"
import { CartContext } from "../../contexts/cart-context.jsx";
import { useContext, useState } from "react";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";

function Checkout(){
    const navigate = useNavigate(); 
    const {totalCart, cartprodutos, setcartprodutos, setotalCart} = useContext(CartContext);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [fone, setFone] = useState("");
    
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");

  

    //criando funcao para fazer o post
    function FinalizarPedido(){

        //monta itens para enviar
        let produtos = [];

        //montando o loop com os produtos
        for (var prod of cartprodutos){
            produtos.push({
                id_produto: prod.id,
                qtd: prod.qtd,
                vl_unitario: prod.preco,
                vl_total: prod.preco * prod.qtd
            });
        } 

        //montando o json
        const params = {
            id_usuario: 1,
            nome,
            email,
            fone,
            endereco,
            bairro,
            cidade,
            uf,
            cep,
            total: totalCart,
            itens: produtos

        }    

        api.post("/pedidos", params)
        .then((resp) => {
            //zerando o carrinho e jogando o ususario para tela de historico de pedidos
            setcartprodutos([]);
            setotalCart(0);
            navigate("/historico");

        })
        .catch((err) => {
            alert("Erro ao enviar pedido")
        })


    } 


    return <>
        <NavBar />

        <div className="container">
            <div className="titulo text-center">
                <h1>Finalizar Pedido Cardápio</h1>
                
            </div>
        </div>

        <div className="col-3">
            
            <div className="box-checkout">
                <h3>Dados Pessoais</h3>
                
                <div className="input-group">
                    <p>Nome Completo</p>
                    <input type="text" id="nome" onChange={(e) => setNome(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>E-mail</p>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>Telefone Contato</p>
                    <input type="text" id="fone" onChange={(e) => setFone(e.target.value)}/>
                </div>

            </div>
        </div>

        <div className="col-3">

            <div className="box-checkout">
                <h3>Endereço de Entrega</h3>
                
                <div className="input-group">
                    <p>CEP</p>
                    <input type="text" id="cep" onChange={(e) => setCep(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>Endereço</p>
                    <input type="text" id="endereco" onChange={(e) => setEndereco(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>Bairro</p>
                    <input type="text" id="bairro" onChange={(e) => setBairro(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>Cidade</p>
                    <input type="text" id="cidade" onChange={(e) => setCidade(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>UF</p>
                    <select id="uf" onChange={(e) => setUf(e.target.value)}>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="SP">São Paulo</option>
                    </select>
                </div>

            </div>
        </div>

        <div className="col-3">
            <div className="box-checkout">
                <h3>Valores</h3>
    
                <div className="checkout-valores">
                    <span>Total</span>
                    <span><strong>{new Intl.NumberFormat('pt-BR',
                                    {style: 'currency', currency: "BRL"}).format(totalCart)}</strong></span>
                </div>

                <div className="checkout-button">
                    <button className="btn-checkout" onClick={FinalizarPedido}>Finalizar Pedido</button>
                </div>
            </div>
        </div>

        
    </>
}

export default Checkout;