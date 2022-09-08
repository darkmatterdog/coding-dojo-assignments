import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <h1>App-App</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:input" element={<Hello/>}/>
        <Route path="/:input/:textcolor/:bgcolor" element={<Hello/>}/>
      </Routes>
    </div>
  );
}

export default App;
