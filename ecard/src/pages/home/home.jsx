import NavBar from "../../components/navbar/navbar.jsx";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine.jsx";
import { produtos } from "../../dados/dados.js";

function Home(){
    return <>
        <NavBar showMenu />
        <div className="container">
            <div className="titulo text-center">
                <h1>Nossas Geléias</h1>
                <p className="subtitulo">Produtos da Amazônia como você nunca viu. Com baixo teor calórico, sem glútem, sem aromatizantes. Ideal para pessoas com pré-disposição à diabetes e pessoas que buscam saúde e o bem-estar fisíco e mental. </p>
            </div>
        </div>

        <div className="text-center">
            {
                produtos.map( function(produto){
                    return <ProdutoVitrine  key={produto.id}
                                            id={produto.id}
                                            nome={produto.nome}
                                            foto={produto.foto}
                                            descricao={produto.descricao}
                                            preco={produto.preco} />
                })


                

            }
        
        
        </div>

        
    </>
}
    
export default Home;        