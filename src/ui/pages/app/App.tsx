import React from 'react';
import './App.css';
import ClickCounter from "../../components/mutable/clickcounter/clickcounter";
import {Click} from "../../components/mutable/clickcounter/viewmodel";
import SimpleHeader from "../../components/mutable/simpleheader/simpleheader";

function App() {
    return (
        <div>
            <SimpleHeader counter={0}></SimpleHeader>
            <ClickCounter clickModel={new Click(0)}></ClickCounter>
            <ClickCounter clickModel={new Click(0)}></ClickCounter>
        </div>
    );
}

export default App;
