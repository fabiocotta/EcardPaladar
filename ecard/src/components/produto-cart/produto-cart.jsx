
import "./produto-cart.css";
import { CartContext } from "../../contexts/cart-context"; 
import { useContext } from "react";


function ProdutoCart(props){

    const {RemoveitemCart} = useContext(CartContext);
    const {AdditemCart}    = useContext(CartContext);

    function Removeitem(){

        const item = {
            id: props.id

        }

        RemoveitemCart(item);

    }

    function Additem(){

        const item = {
            id: props.id,
            nome: props.nome,
            preco: props.preco,
            foto: props.foto,
            qtd: 1
        }

        AdditemCart(item);

    }

    return <div className="produto-cart-box">
        <img src={props.foto} alt="Foto" />

        <div>
            <p className="produto-cart-nome">{props.nome}</p>
            <p className="produto-cart-descricao">{props.descricao}</p>
            <p className="produto-cart-valor">{new Intl.NumberFormat('pt-BR',
                {style: 'currency', currency: "BRL"}).format(props.preco)}</p>

            <div className="footer-produto-cart">
                <div>
                    <button onClick={Removeitem} className="footer-produto-btn">-</button>
                    <span className="footer-produto-qtd">{props.qtd}</span>
                    <button onClick={Additem} className="footer-produto-btn">+</button>
                </div>

                <p className="footer-produto-preco">{new Intl.NumberFormat('pt-BR',
                {style: 'currency', currency: "BRL"}).format(props.preco * props.qtd)}</p>

            </div>
        </div>
    </div>
    


}

export default ProdutoCart;