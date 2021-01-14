import React, {useState} from 'react';
import Display from './Display.jsx'

const Tabs = ({tabs, selected, tabHandler}) => {

    // Moved the below code to App.js to "lift state to parent/ so all if it is in the parent"
    // const [tabs, setTabs] = useState([
    //     {title: 'Tab 1', content: 'This is Tab 1'},
    //     {title: 'Tab 2', content: 'This is Tab 2'},
    //     {title: 'Tab 3', content: 'This is Tab 3'},
    //     {title: 'Tab 4', content: 'This is Tab 4'}
    // ]);

    // const [selected, setSelected] = useState(0);

    // const tabHandler = (idx) => {
    //     setSelected(idx);
    // }

    return (
        <div>
            {
                tabs.map((val, idx) => 
                    <button key={idx} onClick={e => tabHandler(idx)}>{val.title}</button>
                )
            }
            Hello my name is Tabs!
            <Display tabs={tabs} selected={selected} />
        </div>
    )
};

export default Tabs;