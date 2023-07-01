import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export function LogInBox(props) {

    const [enteredUserName, setEnteredUserName] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();


    function handleClick() {
        signInWithEmailAndPassword(auth, enteredUserName, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  }).then(props.onLogIn);
  setEnteredUserName("");
  setPassword("");
  props.onLogIn();
  };
    

    function handleUserNameChange(e) {
        setEnteredUserName(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

        return (
            <div className="LoginBox">
                <input onChange={handleUserNameChange} placeholder="UserName" value={enteredUserName}/>
                <input type="password" onChange={handlePasswordChange} placeholder="Password" value={password}/>
                <button onClick={handleClick}>Log In</button>
            </div>
        )
    
}