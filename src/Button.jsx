import ClassNames from "./App.module.css";
const Button = (props) => {
    return (
        <button className = {ClassNames.MainButton} {...props}>
            {props.children}
        </button>
    )
}

export default Button;