import './button.css';

function Button(props) {
    return (
        <button className="boton"
                onClick={props.onClick}
        >
            {props.icon}
            {props.text}
        </button>
    );
}
export default Button;