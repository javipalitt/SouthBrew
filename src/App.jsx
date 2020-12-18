import './styles/App.scss';
import Hero from '../src/components/Home/Hero';
import Navbar from '../src/components/General/Navbar/Navbar';
import Modal from '../src/components/General/Modal/Modal'
import { FaShoppingBasket } from "react-icons/fa";
import ProductCard from '../src/components/General/ProductCard/ProductCard';
import { useState } from 'react';


function App() {
  const [value, setValue] = useState(0)
  return (
    <>
    <Navbar />
    <a href="/#modal" style={{fontSize: 50}}> <FaShoppingBasket /> </a>
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
    <div className="contanedor">
         <h1>Contador de Granos de Café</h1>
         <h2>{value}</h2>
         <button className='btn' onClick={() => setValue(value + 1)}>
            Sumar
         </button>
          <button className='btn' onClick={() => setValue(0)}>
          Limpiar
      </button>
       <button className='btn' onClick={() => setValue(value - 1)}>
       Restar
   </button>
         
        </div>

    </>
  );
}

export default App;
