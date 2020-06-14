import React from 'react';
import './App.css';
import ClickCounter from "../../components/mutable/clickcounter/clickcounter";
import {Click, ClickCounterViewModelMutator, LoginModel, User} from "../../components/mutable/clickcounter/viewmodel";

const viewModel = ClickCounterViewModelMutator.getViewModel();

function App() {
    // fetch the latest view model here from data provider

    // Avoid large view models like this as this will
    // inefficient re-rendering of layouts even for
    // components that do not depend on the latest
    // view model updates
    // const loginModel = new LoginModel(new User(), 0);

    // instead break them into independent components like this
    const userModel = new User();
    const clickCounterModel = new Click(0);
    return (
        <React.Fragment>
            {viewModel.click.counter >= 5 ? (<p className="activeButtonInfo">Reset Button Enabled</p>) : (<p className="inactiveButtonInfo">Reset Button Disabled</p>)}
            <ClickCounter viewModel={viewModel}></ClickCounter>
            <ClickCounter viewModel={viewModel}></ClickCounter>
        </React.Fragment>
    );
}

export default App;
