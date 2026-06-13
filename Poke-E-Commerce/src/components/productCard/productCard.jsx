import './productCard.css';
import Button from '../button/button.jsx';
function ProductCard(props) {
    return (
        <div className="product-card">

            <div className="num-img">
                <h2 className="pokemon-num">
                    #{props.num}
                </h2>

                <img
                    className="pokemon-image"
                    src={props.img}
                    alt={props.name}
                />
            </div>

            <div className="name-caracte">

                <h2 className="pokemon-name">
                    {props.name}
                </h2>

                <div className="pokemon-data">
                    <p>Tipo: {props.type.join(" / ")}</p>

                    <p>Altura: {props.height}</p>

                    <p>Peso: {props.weight}</p>
                </div>

            </div>
            <Button text="Agregar al carrito" />
        </div>
    );
}

export default ProductCard;