import React from "react";
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDKYEzGpp3k8t5J4K3_ZMQNvr51bqUJcJ0",
    authDomain: "austinrecipestorage.firebaseapp.com",
    projectId: "austinrecipestorage",
    storageBucket: "austinrecipestorage.appspot.com",
    messagingSenderId: "872560981020",
    appId: "1:872560981020:web:3eb374306664e348005bd9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore(app);

export default function RecipeAdder() {

    const [title, setTitle] = useState("");
    const [URL, setURL] = useState("");
    const [debugText, setDebugText] = useState("No recipes published")

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleURLChange(e) {
        setURL(e.target.value)
    }

    async function publishRecipe() {
        const recRef = await addDoc(collection(db, "Recipes"), {
            Title: title,
            URL: URL
        })
        setDebugText(`Just created ${title} at ${URL}`)
        setTitle("")
        setURL("")
    }

    return (
        <span className="RecipeAdder">
            <input onChange={handleTitleChange} placeholder="Title" value={title}/>
            <input onChange={handleURLChange} placeholder="URL" value={URL}/>
            <button onClick={publishRecipe}>Create!</button>
            <p>{debugText}</p>

        </span>
    )
}