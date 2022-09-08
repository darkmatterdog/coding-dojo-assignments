import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
    <PersonCard firstName="Jane" lastName="Doe" age={202} hairColor="purple"/>
    <PersonCard firstName="Tom" lastName="Deer" age={1} hairColor="black"/>
    <PersonCard firstName="Johnny" lastName="Cash" age={202} hairColor="green"/>
    <PersonCard firstName="Sam" lastName="Parker" age={9} hairColor="brown"/>
    </div>
  );
}

export default App;
