import logo from './logo.svg';
import './App.css';
import Questionnaire2 from './Questionnaire2';
import {useState} from "react";
function App() {
    const [selectedProfession, setSelectedProfession] = useState('');

    const handleProfessionSelection = (profession) => {
        setSelectedProfession(profession);
    };
  return (

    <div className="App">
      <header className="App-header">
          <p className="Title1">Teste vocacional de informatica</p>
          <Questionnaire2 onProfessionSelect={handleProfessionSelection} />




      </header>
    </div>

          );
}

export default App;
