// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup,linkWithPopup} from "firebase/auth";
import { OAuthProvider,signOut  } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAuJae7DWAa7iy7FflNt1Yfl_wZKSdX_co",
  authDomain: "authentication-faac7.firebaseapp.com",
  projectId: "authentication-faac7",
  storageBucket: "authentication-faac7.appspot.com",
  messagingSenderId: "271200619181",
  appId: "1:271200619181:web:51adc85f54496e95525424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);


const provider1 = new OAuthProvider('microsoft.com')
export const signInWithMicrosoft =()=>{
signInWithPopup(auth, provider1)
  .then((result) => {
    
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;
  })
  .catch((error) => {
    
  });
};

const provider=new GoogleAuthProvider()
export const signInWithGoogle =()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
        const name=result.user.displayName;
        const email=result.user.email;
        const profilePic=result.user.photoURL;

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("profilePic",profilePic);

    })
    .catch((error)=>{
        console.log(error);
    });
};


signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});