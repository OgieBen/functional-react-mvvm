import React from 'react';
import './App.css';
import ClickCounter from "../../components/mutable/clickcounter/clickcounter";
import {Click} from "../../components/mutable/clickcounter/viewmodel";
import SimpleHeader from "../../components/mutable/simpleheader/simpleheader";

function App() {
    // fetch the latest view model here from data provider

    // Avoid large view models like this as this will cause
    // inefficient re-rendering of layouts even for
    // components that do not depend on the latest
    // view model updates
    // const loginModel = new LoginModel(new User(), 0);

    // instead break them into independent components like this
    // const userModel = new User();
    // const clickCounterModel = new Click(0);
    return (
        <div>
            <SimpleHeader counter={0}></SimpleHeader>
            <ClickCounter clickModel={new Click(0)}></ClickCounter>
            <ClickCounter clickModel={new Click(0)}></ClickCounter>
        </div>
    );
}

export default App;
