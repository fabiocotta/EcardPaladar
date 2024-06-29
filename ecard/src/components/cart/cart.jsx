import { Dock } from "react-dock";
import { useEffect, useState, useContext } from "react";
import ProdutoCart from "../produto-cart/produto-cart";
import "./cart.css"
//import Checkout from "../../pages/checkout/checkout";
import { useNavigate } from "react-router-dom";
//import { cartprodutos } from "../../dados/dados";
import { CartContext } from "../../contexts/cart-context";
import back from "../../assets/back.png";



function Cart(){

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const {cartprodutos, totalCart} = useContext(CartContext);

    /* usando o useeffect do react para ficar ouvindo chamadas - 
    se deixar sem parametros executa uma vez quando carrega a pagina */
    useEffect( function(){
        window.addEventListener('abrirCart', function(){
            setShow(true);
        });

    }, []);

    function checkout(){
        navigate('/checkout')

    }

    return <Dock position="right"
              isVisible={show}
              fluid={false}
              size={360}
              onVisibleChange={ function(visible) {
                setShow(visible)
              }}
            >
            
            <div className="text-center">
                <img onClick={function(e){
                    setShow(false);
                }} src={back} className="cart-btn-close" />
                <h1>Meu Pedido</h1>
            </div>

            <div className="lista-produto">
                {
                    cartprodutos.map(function(itemcard){
                        return <ProdutoCart key={itemcard.id}
                                            id={itemcard.id}
                                            foto={itemcard.foto}
                                            descricao={itemcard.descricao}
                                            nome={itemcard.nome}
                                            qtd={itemcard.qtd}
                                            preco={itemcard.preco}    />
                    })
                }

            </div>

            <div className="footer-cart">
                <div className="footer-cart-valor">
                    <span>Total</span>
                    <span><strong>{new Intl.NumberFormat('pt-BR',
                                    {style: 'currency', currency: "BRL"}).format(totalCart)}</strong></span>
                </div>

                <div>
                    <button onClick={checkout} className="btn-checkout">Finalizar Pedido</button>
                </div>
            </div>
        </Dock>
    
    
}

export default Cart;