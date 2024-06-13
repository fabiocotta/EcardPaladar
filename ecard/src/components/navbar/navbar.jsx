import "./navbar.css"
import logo from "../../assets/lg_pam.png"
import bag from "../../assets/bag.png"
import Cart from "../cart/cart";
import { useNavigate } from "react-router-dom";





function NavBar(props){



    const navigate = useNavigate();

    function home(){
        navigate('/')
    
    }

    function abrirCart(){

        /* aqui temos um event feito em javascrip puro para abrir e fechar o modal cart*/
        const event = new CustomEvent('abrirCart');
        window.dispatchEvent(event);

    }


    return <>
        <div className="bgnavbar">
            <img onClick={home} className="logotipo" src={logo} alt="logotipo" />

           {
                props.showMenu &&
        
                <div className="menu">
                    <a href="#">Histórico</a>
                    <button onClick={abrirCart} className="btn-sacola btn-verde">
                        <img className="icon" src={bag} alt="sacola"/>
                        Sacola
                    </button>
                </div>

            }
        
        </div>
        <Cart/>
    
    </>
}

export default NavBar;