import "./navbar.css"
import logo from "../../assets/lg_pam.png"
import bag from "../../assets/bag.png"

function NavBar(){
    return <>
        <div className="bgnavbar">
            <img className="logotipo" src={logo} alt="logotipo" />
        
            <div className="menu">
                <a href="#">Histórico</a>
                <button className="btn-sacola btn-verde">
                    <img className="icon" src={bag} alt="sacola"/>
                    Sacola
                </button>
            </div>
        
        </div>
    
    </>
}

export default NavBar;