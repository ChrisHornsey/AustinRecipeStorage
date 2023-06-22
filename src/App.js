import './App.css';
import { LogInBox } from './Components/LogInBox/LogInBox';
import RecipeList from './Components/Recipelist/RecipeList';
import RecipeAdder from './Components/RecipeAdder/RecipeAdder';
import { RecipeTag } from './Components/Tag/RecipeTag';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Austin Recipe Storage
        </h1>
      </header>
      <LogInBox/>
      <RecipeAdder/>
      <RecipeList/>
      

    </div>
  );
}

export default App;
