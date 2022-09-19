import { StyledBaseButton, StyledGoogleSignInButton, StyledInvertedButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    external: 'external',
    inverted: 'inverted',
    base: 'base'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: StyledBaseButton,
        [BUTTON_TYPE_CLASSES.external]: StyledGoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: StyledInvertedButton
    }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
        return <CustomButton {...otherProps}> {children} </CustomButton>;
}
 
export default Button;