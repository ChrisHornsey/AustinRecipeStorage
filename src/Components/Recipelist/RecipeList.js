import React from "react";
import Recipe from "../Recipe/Recipe";
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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



export default function RecipeList () {
    const [recipes, setRecipes] = useState([]);

async function refreshData() {
  let recipeArray = []
const querySnapshot = await getDocs(collection(db, "Recipes"))
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
   let newRecipe = doc.data();
  console.log(recipeArray)
  recipeArray.push(newRecipe)  
  console.log(recipes)
});

setRecipes(recipeArray)


}

    return (
        <div className = "RecipeList">
                {recipes.length > 0 ? (
                    recipes.map(recipe => <Recipe key = {recipe.id} recipe={recipe}/>)
                    ) : (
                        <div>
                        <p>Log in to see recipes, then click refresh below</p>
                        <button onClick={refreshData}>Refresh</button>
                        </div>
                    )}
            </div>
    )

}