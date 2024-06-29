import { createContext, useState } from "react"; 

const CartContext = createContext();

function CartProvider(props){
    const [cartprodutos, setcartprodutos] = useState([]);
    const [totalCart, setotalCart] = useState(0);
    
    
    /*aqui vamos montar a funcao para adicionar os pedidos no cart via area de contexto*/
    function AdditemCart(item){
        
        /*verfica se ja existe produto adicionado*/
        let cartprodutosNovo = [];
        let findProduto = false;

        for (var produto of cartprodutos){
            
            // Encontrou
            if (produto.id == item.id){
                item.qtd = produto.qtd + 1;
                findProduto = true;
                cartprodutosNovo.push(item);
        } else {
            cartprodutosNovo.push(produto);
        }
    }

    // Se nao encontrou o produto ou é o primeiro a ser inserido... 

    if ((findProduto == false) || (cartprodutos.length == 0)){
        cartprodutosNovo.push(item);
    }

        /* usamos o operador(...) para pegar o que ja tem e adicionamos o novo item*/
        setcartprodutos(cartprodutosNovo);
        CalcTotal(cartprodutosNovo);
    }


    /*aqui vamos montar a funcao para remover os itens do pedido no cart via area de contexto*/
    function RemoveitemCart(item){
        
        /*verfica se ja existe produto adicionado*/
        let cartprodutosNovo = [];
  
        for (var produto of cartprodutos){
            
            // Encontrou
            if (produto.id == item.id){
                produto.qtd = produto.qtd - 1;
                
            }
            cartprodutosNovo.push(produto);
        }
    

    // Removendo itens zerados
    cartprodutosNovo = cartprodutosNovo.filter(function(item){
        return item.qtd > 0
    });

    // Atualizando a lista do carrinho
    
    setcartprodutos(cartprodutosNovo);
    CalcTotal(cartprodutosNovo);
    }

    function CalcTotal(items){
        let tot = 0;
        for (var item of items)
            tot = tot + (item.preco * item.qtd)

        setotalCart(tot)

    }

    
    return <CartContext.Provider value={{cartprodutos, setcartprodutos, AdditemCart, RemoveitemCart, setotalCart, totalCart}}>
        {props.children}

    </CartContext.Provider>

}

export {CartContext, CartProvider};