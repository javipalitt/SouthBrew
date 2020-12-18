import NavItem from '../NavItem/NavItem';
import { FaShoppingBasket } from "react-icons/fa";



function Navbar() {
    return (
        <div className="container">
        <nav className="navbar">
            <ul className="navbar--links">

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
