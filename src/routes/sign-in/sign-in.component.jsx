import SignUpForm from "../../components/sign-up/sign-up-form.components";
import { auth, signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return ( 
        <div className="sign-in">
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Log Pop Up Google User</button>
            <SignUpForm/>
        </div>
     );
}
 
export default SignIn;