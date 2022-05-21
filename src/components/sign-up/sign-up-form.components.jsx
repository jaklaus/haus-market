import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"; 
import Button from "../button/button.component";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            const userDecRef = await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("Cannot create User Email already in use.")
            }
            console.log(error.message);
        }
    }

    const resetFormFields = () => setFormFields(defaultFormFields);

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password.</span>
            <form onSubmit={handleOnSubmit}>
                <FormInput
                    label="Name"
                    type="text"
                    name="displayName"
                    id="displayName"
                    required
                    onChange={handleChange}
                    value={displayName}
                />
                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={handleChange}
                    value={email} />
                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    required
                    onChange={handleChange}
                    value={password} />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    id="confirm-password"
                    required
                    onChange={handleChange}
                    value={confirmPassword} />
                <Button buttonType="inverted" type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;