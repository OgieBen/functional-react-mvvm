import React from 'react';
import './App.css';
import ClickCounter from "../../components/mutable/clickcounter/clickcounter";
import {
    Click,
    ClickCounterViewModelMutator,
    ClickViewModel,
    LoginModel,
    User
} from "../../components/mutable/clickcounter/viewmodel";
import {observer} from "mobx-react";

const viewModel = ClickCounterViewModelMutator.getViewModel();

function App() {
    // fetch the latest view model here from data provider

    // Avoid large view models like this as this will cause
    // inefficient re-rendering of layouts even for
    // components that do not depend on the latest
    // view model updates
    // const loginModel = new LoginModel(new User(), 0);

    // instead break them into independent components like this
    const userModel = new User();
    const clickCounterModel = new Click(0);
    return (
        <React.Fragment>
            <Header viewModel={viewModel}></Header>
            <ClickCounter viewModel={viewModel}></ClickCounter>
            <ClickCounter viewModel={viewModel}></ClickCounter>
        </React.Fragment>
    );
}

interface IHeaderProps {
    viewModel: ClickViewModel;
}

const Header = observer((props: IHeaderProps) => (props.viewModel.click.counter >= 5 ? (
    <p className="activeButtonInfo">Reset Button Enabled</p>) : (
    <p className="inactiveButtonInfo">Reset Button Disabled</p>)));


export default App;
