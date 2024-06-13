
import "./produto-cart.css";
import foto from "../../assets/geleiaacai.jpg"

function ProdutoCart(){

    return <div className="produto-cart-box">
        <img src={foto} alt="Foto" />

        <div>
            <p className="produto-cart-nome">Geleia de Açaí</p>
            <p className="produto-cart-descricao">Geleia de Açaí elaborada com 75% de polpa de açaí e seus conservantes são naturais, possuindo somente 25% de açúcar, tipo demerara. Sem glúten, zero lactose, sem corantes ou saborizantes artificiais</p>
            <p className="produto-cart-valor">R$ 18,90</p>

            <div className="footer-produto-cart">
                <div>
                    <button className="footer-produto-btn">-</button>
                    <span className="footer-produto-qtd">02</span>
                    <button className="footer-produto-btn">+</button>
                </div>

                <p className="footer-produto-preco">R$ 37,80</p>
            </div>
        </div>
    </div>
    


}

export default ProdutoCart;