import { useState } from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
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
            const response = await signInAuthUserWithEmailAndPassword(email, password);
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
        const { user } = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const resetFormFields = () => setFormFields(defaultFormFields);

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <p>Sign in with your email and password.</p>
            <form onSubmit={handleOnSubmit}>
                <FormInput label="Email" type="email" name="email" id="sign-in-email" required onChange={handleChange} value={email} />
                <FormInput label="Password" type="password" name="password" id="sign-in-password" required onChange={handleChange} value={password} />
                <Button type="submit" buttonType='primary'>Sign In</Button>
                <Button type="button" onClick={logGoogleUser} buttonType="external">Sign In With Google</Button>
            </form>

            
        </div>
    );
}

export default SignInForm;