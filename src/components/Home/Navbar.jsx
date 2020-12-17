import NavItem from '../Home/NavItem/NavItem';
import { FaShoppingBasket } from "react-icons/fa";



function Navbar() {
    return (
        <div className="container">
        <nav className="navbar">
            <ul className="navbar--links">
                <li>
                   <img src={require('../../assets/logo.png')} alt="SouthBrewLogo" />
                </li>
                <NavItem text="Inicio" url="www.google.com" />
                <NavItem text="Nosotros" />
                <NavItem text="Nuestros Blends"  />
                <NavItem text="Tienda" />
                <li>
                    <FaShoppingBasket />
                    
                </li>
                
            </ul>
        </nav>
        </div>
    )
}

export default Navbar
