import './App.css';
import Tabs from './components/Tabs.jsx'
import React, {useState} from 'react';

function App() {

    const [tabs, setTabs] = useState([
      {title: 'Tab 1', content: 'This is Tab 1'},
      {title: 'Tab 2', content: 'This is Tab 2'},
      {title: 'Tab 3', content: 'This is Tab 3'},
      {title: 'Tab 4', content: 'This is Tab 4'}
    ]);

    const [selected, setSelected] = useState(0);

    const tabHandler = (idx) => {
        setSelected(idx);
    }




  return (
    <div>
    {/* <div className="App"> */}
      <Tabs tabs={tabs} selected={selected} tabHandler={tabHandler}/>
    </div>
  );
}

export default App;
