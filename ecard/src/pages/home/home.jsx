import { useEffect, useState } from "react";
import NavBar from "../../components/navbar/navbar.jsx";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine.jsx";
import api from "../../services/api.js";

function Home(){

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        api.get("/produtos")
        .then((resp) => {
            setProdutos(resp.data);

        })
        .catch((err) => {
            alert('Erro ao carregar os produtos na vitrine')
        })
    }, []);

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
                    return <ProdutoVitrine  key={produto.id_produto}
                                            id={produto.id_produto}
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