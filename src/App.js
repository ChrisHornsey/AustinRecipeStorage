import './App.css';
import { LogInBox } from './Components/LogInBox/LogInBox';
import RecipeList from './Components/Recipelist/RecipeList';
import RecipeAdder from './Components/RecipeAdder/RecipeAdder';
import { SearchBox } from './Components/SearchBox/SearchBox';
import { getFirestore, collection, getDocs, updateDoc, doc, arrayUnion, arrayRemove, getDoc, query, where } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import userIcon from './Images/user.png'
import cookingIcon from './Images/cooking.png'

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
  const [recipes, setRecipes] = useState([]);
  const [selectedTag, setSelectedTag] = useState("")
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [userName, setUserName] = useState("")
  const [showLogInBox, setShowLogInBox] = useState(true)
  const [showRecipeAdder, setShowRecipeAdder] = useState(false)
  const [searchString, setSearchString] = useState("")

  useEffect(filterRecipes, [searchString, selectedTag, recipes]);
  useEffect(onLoad, [])

  const auth = getAuth(fireApp);


  function onLoad() {
    refreshRecipes();
    getAllTags().then(refreshUser);
    

    console.log("I am loading")
    

  function refreshUser() {
    const user = auth.currentUser;
    console.log(`Current user is: ${user}`)

    if (user !== null) {
      setUserName(user.email) 
      setShowLogInBox(false)     
    }
  }

  }

  function filterRecipes() {
    let holdRecipes
    if (selectedTag !== "") {
      holdRecipes = recipes.filter(x => x.Tags.includes(selectedTag))
    } else {
      holdRecipes=[...recipes]
    }
    console.log(`I think I am filtering recipes based on the tag ${selectedTag}`)

    if (searchString) {
      holdRecipes = holdRecipes.filter(x => x.Title.toLowerCase().includes(searchString.toLowerCase()))
    }
    
    setFilteredRecipes(holdRecipes)
  }

  async function fetchRecipes() {
    let recipeArray = []
    const  q = query(collection(db, "Recipes"))
    
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
     let newRecipe = doc.data();
     newRecipe.id = doc.id;
    recipeArray.push(newRecipe)  
  });

  console.log("I think I am fetching recipes")
  
  return recipeArray
  
  }
  
  async function addTag(tagName, recipeID, isFirstTag) {
    console.log(`called addtag with tagName = ${tagName}, recipeID = ${recipeID} & isFirstTag = ${isFirstTag}`)
    const recipeToUpdate = doc(db, "Recipes", recipeID)
    if (isFirstTag) {
          await updateDoc(recipeToUpdate, {
            Tags : [tagName]
          });
    } else {
      await updateDoc(recipeToUpdate, {
        Tags: arrayUnion(tagName)
      })
    }
    const allTagsDoc = doc(db, "Tags", "AllTags" )
    await updateDoc(allTagsDoc, {
      AllTags: arrayUnion(tagName)
    })
    refreshRecipes();
    getAllTags();
  }
  
  async function removeTag(recipeID, tagName) {
    console.log(`Called remove tag for recipe ${recipeID}, and tag ${tagName}`)
    const recipeToUpdate = doc(db, "Recipes", recipeID)
    await updateDoc(recipeToUpdate, {
      Tags: arrayRemove(tagName)
    })
    refreshRecipes();
  }

  async function refreshRecipes() {
    fetchRecipes().then( result => setRecipes(result));
    console.log("I think I am refreshing recipes")
   // filterRecipes()
  }
  

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

    console.log("I think I am getting tags")
 
  }

  function toggleRecipeAdder() {
    setShowRecipeAdder(!showRecipeAdder)
  }

function toggleLogInBox() {
  setShowLogInBox(!showLogInBox)
}  


  return (
    <div className="App">
      <header className="App-header">
        <span className='RecipeAdderToggle'>
        <img className='CookingIcon' src={cookingIcon} onClick={toggleRecipeAdder}/>
        </span>
        <h1>
          Austin Recipe Storage
        </h1>
        <span className='UserNameLabel'>
        <img className='UserIcon' src={userIcon} onClick={toggleLogInBox}/>
        </span>
      </header>
      
      <div className='recipeAdmin'>
      {showRecipeAdder ? <RecipeAdder/> : <div className='RecipeAdder'></div>}
      {showLogInBox ? <LogInBox refreshTags={getAllTags} onLogIn={onLoad} userName={userName}/> : <div className='LoginBox'></div>}
      
      </div>
      <SearchBox allTags={allTags} setSelectedTag={setSelectedTag} selectedTag={selectedTag} searchString={searchString} setSearchString={setSearchString}/>
      <RecipeList removeTag={removeTag} addTag={addTag} recipes={filteredRecipes}/>
      

    </div>
  );
}

export default App;
