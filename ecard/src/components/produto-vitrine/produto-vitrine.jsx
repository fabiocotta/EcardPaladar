import "./produto-vitrine.css"
import foto from "../../assets/geleiaacai.jpg"
import bag from "../../assets/bag-black.png"


function ProdutoVitrine(){
    return <>
        <div className="produto-box text-center">
            <img src={foto} alt="Foto" />

            <div>
                <h2>Geleia de Açaí</h2>
                <p className="prod-vitrine-descricao">A Geleia de Açaí do Paladar Amazônico possui sabor autêntico e cremosidade típica do fruto nativo da Amazônia. É elaborada com 75% de polpa de açaí e seus conservantes são naturais, possuindo somente 25% de açúcar, tipo demerara. Sem glúten, zero lactose, sem corantes ou saborizantes artificiais</p>
                <p className="prod-vitrine-preco">R$ 18,90</p>
            </div>
           
           <div>
                <button className="btn btn-cart">
                    <img src={bag} className="icon"  alt="Icone Carrinho" />Adicionar
                </button>
            
           </div>

        </div>
    </>
}

export default ProdutoVitrine;