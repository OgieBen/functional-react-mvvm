import React, {useEffect} from "react";
import Presenter from "./presenter";
import {Click, ClickCounterViewModelMutator, ClickViewModel, IClick, IClickViewModel} from "./viewmodel";
import {observer} from "mobx-react";

const viewModelMutators = ClickCounterViewModelMutator;

interface IProviderProps {
    // The ILoginViewModel model is irrelevant here and is only kept as
    // an example of bad implementation of least privilege principle.
    // Provider should only receive as props data that it clearly needs
    // to function and render the view component
    viewModel: ClickViewModel;
}

function ClickCounter(props: IProviderProps) {
    // return the components
    return (
        <ClickCounterProvider viewModel={props.viewModel}></ClickCounterProvider>
    );
}

const ClickCounterProvider = observer((props: IProviderProps) => (
    <Presenter clickCount={props.viewModel.click.counter}
               incrementCounter={() => incrementCounter(props.viewModel)}
               decrementCounter={() => decrementCounter(props.viewModel)}/>
))


function incrementCounter(clickViewModel: IClickViewModel) {
    const newClick = viewModelMutators.incrementCount(clickViewModel.click);
    // update viewModel here with newClick
    viewModelMutators.updateViewModel(clickViewModel, newClick);
    console.log(newClick.counter);
}

function decrementCounter(clickViewModel: IClickViewModel) {
    const newClick = viewModelMutators.decrementCount(clickViewModel.click)
    // update viewModel here with newClick
    viewModelMutators.updateViewModel(clickViewModel, newClick);
    console.log(newClick.counter);
}

export default ClickCounter;