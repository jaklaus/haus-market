import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return ( 
        <div className="sign-in">
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Log Google User</button>
        </div>
     );
}
 
export default SignIn;