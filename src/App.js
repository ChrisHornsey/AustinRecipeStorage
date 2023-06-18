import './App.css';
import { LogInBox } from './Components/LogInBox/LogInBox';
import RecipeList from './Components/Recipelist/RecipeList';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Austin Recipe Storage
        </h1>
      </header>
      <LogInBox/>
      <RecipeList/>
      

    </div>
  );
}

export default App;
