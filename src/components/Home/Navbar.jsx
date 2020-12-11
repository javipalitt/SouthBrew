import NavItem from '../Home/NavItem/NavItem';
import { FaShoppingBasket } from "react-icons/fa";


function Navbar() {
    return (
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
    )
}

export default Navbar
