import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
    <PersonCard firstName="Jane" lastName="Doe" age={26} hairColor="Black"/>
    <PersonCard firstName="Samuel" lastName="Parker" age={21} hairColor="Brown"/>
    <PersonCard firstName="John Q." lastName="Public" age={44} hairColor="White"/>
    <PersonCard firstName="Avery" lastName="Starling" age={10} hairColor="Purple"/>
    </div>
  );
}

export default App;
