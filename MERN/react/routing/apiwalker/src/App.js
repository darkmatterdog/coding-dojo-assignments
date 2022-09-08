import './App.css'
import {Routes, Route} from 'react-router-dom'
import Search from './components/Search'
import Results from './components/Results'

function App() {
  return (
    <div className="App">
      <Search/>
      <Routes>
        <Route path="/" element={<p>Search the Star Wars API!</p>}/>
        <Route path="/:resource/:ID" element={<Results/>}/>
      </Routes>
    </div>
  );
}

export default App;
