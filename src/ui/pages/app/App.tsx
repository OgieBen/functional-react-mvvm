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
