
import './App.css';
import {signInWithGoogle} from "./firebase";
import {signInWithMicrosoft} from "./firebase";

function App() {
 return <div className='App'>
  <button onClick={signInWithGoogle}>Sign in with google</button>
  <button onClick={signInWithMicrosoft}>Sign in with Microsoft </button>
  <h3>{localStorage.getItem("name")}</h3>
  <h3>{localStorage.getItem("email")}</h3>
  <img src={localStorage.getItem("profilePic")}/>
 </div>

}

export default App;
