import './styles/App.scss';
import Hero from './components/Home/Hero';
import Navbar from './components/Home/Navbar';
import Modal from './components/Home/Modal/Modal'
import { FaShoppingBasket } from "react-icons/fa";
import ProductCard from './components/Home/ProductCard/ProductCard';



function App() {
  return (
    <>
    <Navbar />
    <a href="#modal" style={{fontSize: 50}}> <FaShoppingBasket /> </a>
    <Modal>
      <h2>El carro de compras esta en construcción!!</h2>
      <p>proximamente podrás realizar tus compras de una manera rápida.
      </p>
    </Modal>
    <Hero />
    <ProductCard titulo="Cafe Brasil" precio="500"/>
    <ProductCard titulo="Cafe Colombia" precio="550"/>
    <ProductCard titulo="Cafe Etiopia" precio="600"/>
    <ProductCard titulo="Cafe Nicaragua" precio="700"/>


    </>
  );
}

export default App;
