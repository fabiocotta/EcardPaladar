import NavBar from "../../components/navbar/navbar.jsx";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine.jsx";

function Home(){
    return <>
        <NavBar />
        <div className="container">
            <div className="titulo text-center">
                <h1>Nossas Geléias</h1>
                <p className="subtitulo">Produtos da Amazônia como você nunca viu. Com baixo teor calórico, sem glútem, sem aromatizantes. Ideal para pessoas com pré-disposição à diabetes e pessoas que buscam saúde e o bem-estar fisíco e mental. </p>
            </div>
        </div>

        <div className="text-center">
            <ProdutoVitrine />
            <ProdutoVitrine />
            <ProdutoVitrine />
        </div>

        
    </>
}
    
export default Home;        