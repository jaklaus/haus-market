import { useState, useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import { UserContext } from "../../contexts/user.context";
import './sign-in-form.styles.scss';
import { signInWithGooglePopUp, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect Password');
                    break;
                case 'auth/user-not-found':
                    alert('No User with that Email')
                    break;
                default:
                    console.log(error);
            }
        }

    }

    const logGoogleUser = async (event) => {
        event.preventDefault();
        await signInWithGooglePopUp();
    }

    const resetFormFields = () => setFormFields(defaultFormFields);

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <p>Sign in with your email and password.</p>
            <form onSubmit={handleOnSubmit}>
                <FormInput label="Email" type="email" name="email" id="sign-in-email" required onChange={handleChange} value={email} />
                <FormInput label="Password" type="password" name="password" id="sign-in-password" required onChange={handleChange} value={password} />
                <Button type="submit" >Sign In</Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.external} type="button" onClick={logGoogleUser} >Sign In With Google</Button>
            </form>
        </div>
    );
}

export default SignInForm;