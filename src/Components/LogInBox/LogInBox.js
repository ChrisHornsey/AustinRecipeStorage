import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export function LogInBox(props) {
    const [debugText, setDebugText] = useState("Starting");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();


    function handleClick() {
        signInWithEmailAndPassword(auth, userName, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    setDebugText(user.email)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setDebugText(errorMessage)
  });
  };
    

    function handleUserNameChange(e) {
        setUserName(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

        return (
            <div className="LoginBox">
                <input onChange={handleUserNameChange} placeholder="UserName"/>
                <input type="password" onChange={handlePasswordChange} placeholder="Password"/>
                <button onClick={handleClick}>Log In</button>
            <p>{debugText}</p>
            </div>
        )
    
}