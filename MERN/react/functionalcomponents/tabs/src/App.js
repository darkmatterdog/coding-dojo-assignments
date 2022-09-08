import Tabs from './components/Tabs';
import TabOutput from './components/TabOutput';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [currentTab, setCurrentTab] = useState("this should change!");

  const changeTab = ( tabContent ) => {
    setCurrentTab(tabContent);
  }

  return (
    <div className="App">
      <Tabs changeTab={changeTab}/><br/>
      <TabOutput tabContent={currentTab}/>
    </div>
  );
}

export default App;
