import { Dock } from "react-dock";
import { useEffect, useState } from "react";
import ProdutoCart from "../produto-cart/produto-cart";
import "./cart.css"
import Checkout from "../../pages/checkout/checkout";
import { useNavigate } from "react-router-dom";


function Cart(){

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

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
              size={420}
              onVisibleChange={ function(visible) {
                setShow(visible)
              }}
            >
            
            <div className="text-center">
                <h1>Meu Pedido</h1>
            </div>

            <div className="lista-produto">
                <ProdutoCart />
                <ProdutoCart />
           
            </div>

            <div className="footer-cart">
                <div className="footer-cart-valor">
                    <span>Total</span>
                    <span><strong>R$ 371,80</strong></span>
                </div>

                <div>
                    <button onClick={checkout} className="btn-checkout">Finalizar Pedido</button>
                </div>
            </div>
        </Dock>
    
    
}

export default Cart;