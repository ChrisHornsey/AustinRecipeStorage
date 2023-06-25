import './App.css';
import { LogInBox } from './Components/LogInBox/LogInBox';
import RecipeList from './Components/Recipelist/RecipeList';
import RecipeAdder from './Components/RecipeAdder/RecipeAdder';
import { SearchBox } from './Components/SearchBox/SearchBox';
import { getFirestore, collection, getDocs, updateDoc, doc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore"
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

const fireApp = initializeApp(firebaseConfig);

const db = getFirestore(fireApp);


function App() {
  const [allTags, setAllTags] = useState([])

  async function getAllTags() {
    const allTagsRef = doc(db, "Tags", "AllTags")

    let allTagsData

    try {
      const allTagsDoc = await getDoc(allTagsRef)

    allTagsData = allTagsDoc.data()  
      
    } catch (error) {
      console.log(error)
    }


    setAllTags(allTagsData.AllTags.sort())
 
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Austin Recipe Storage
        </h1>
      </header>
      <LogInBox/>
      <div className='recipeAdmin'>
      <RecipeAdder/>
      <SearchBox allTags={allTags} refreshTags={getAllTags}v/>
      </div>
      <RecipeList/>
      

    </div>
  );
}

export default App;
