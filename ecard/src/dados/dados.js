

const produtos =   [
    {
        id: 9057,
        nome: "Geleia de Açai",
        descricao: "Lorem",
        preco: 18.90,
        foto: "https://www.paladaramazonico.com.br/portal/img/portfolio/geleiaacai.jpg"
    },
    {
        id: 9056,
        nome: "Geleia de Cupuaçu",
        descricao: "Lorem",
        preco: 17.90,
        foto: "https://www.paladaramazonico.com.br/portal/img/portfolio/geleiacupuacu.jpg"
    },
    {
        id: 9055,
        nome: "Geleia de Maracujá",
        descricao: "Lorem",
        preco: 15.00,
        foto: "https://www.paladaramazonico.com.br/portal/img/portfolio/geleiamangacommaracuja.jpg"
    }
]

const pedidos = [
    {id_pedido: 9057, dt: "13/06/2024", total: 150.40},
    {id_pedido: 9056, dt: "12/06/2024", total: 50.00},
    {id_pedido: 9055, dt: "12/06/2024", total: 30.80},
 
]


const cartprodutos = [
    {
        id: 9057,
        nome: "Geléia de Açaí",
        descricao:"Contém Polpa de Fruta, Sem Glúten, Sem lactose, Sem corantes e aromatizantes artificiais, Sem alergênicos, Livre de transgênicos, Vegano.",
        preco: 18.90,
        foto: "https://www.paladaramazonico.com.br/portal/img/portfolio/geleiaacai.jpg",
        qtd: 2
    },
    {
        id: 9056,
        nome: "Geléia de Cupuaçu",
        descricao: "Contém Polpa de Fruta, Sem Glúten, Sem lactose, Sem corantes e aromatizantes artificiais, Sem alergênicos, Livre de transgênicos, Vegano.",
        preco: 18.90,
        foto: "https://www.paladaramazonico.com.br/portal/img/portfolio/geleiacupuacu.jpg",
        qtd: 3
    },
    {
        id: 9055,
        nome: "Geléia de Maracujá",
        descricao: "Contém Polpa de Fruta, Sem Glúten, Sem lactose, Sem corantes e aromatizantes artificiais, Sem alergênicos, Livre de transgênicos, Vegano.",
        preco: 15.00,
        foto: "https://www.paladaramazonico.com.br/portal/img/portfolio/geleiamangacommaracuja.jpg",
        qtd: 2
    },


]

export {produtos, pedidos, cartprodutos}
