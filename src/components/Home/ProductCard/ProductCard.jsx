import './productcard.scss'
import brasil from '../../../assets/southBrewBrasil.png'


const ProductCard = (props) => {
    return (
        <section className="flex">
            <article className="flex--container">
            <img src={brasil} alt="cafe" />
            <h3>{props.titulo}</h3>
            <p>${props.precio}</p>
            </article>
        </section>
    )
}

export default ProductCard