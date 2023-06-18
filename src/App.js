import logo from './logo.svg';
import './App.css';
import { LogInBox } from './Components/LogInBox/LogInBox';
import { useState } from 'react';


function App() {

  const [words, setWords] = useState("someWords")

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Doing something
        </p>
      </header>
      <LogInBox debugText={words}/>
      <p>{words}</p>

    </div>
  );
}

export default App;
