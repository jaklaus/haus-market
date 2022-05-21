import './button.styles.scss'
const BUTTON_TYPES_CLASSES = {
    externalButton: 'external-button',
    inverted: 'inverted',
    primary: 'primary'
}

const Button = ({buttonType, children, ...otherProps}) => {
    return ( 
        <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
     );
}
 
export default Button;