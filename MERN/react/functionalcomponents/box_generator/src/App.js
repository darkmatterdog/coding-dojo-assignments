import react, {useState} from 'react'
import './App.css';
import BoxForm from './components/BoxForm';
import Box from './components/Box';

function App() {

  const [boxes, setBoxes] = useState([]);

  const addBox = (color) => {
    console.log(color);
    setBoxes([...boxes, color]);
    console.log(boxes);
  }

  return (
    <div className="App">
      <BoxForm onNewBox={addBox}/>
      <Box boxes={ boxes }/>
    </div>
  );
}

export default App;
