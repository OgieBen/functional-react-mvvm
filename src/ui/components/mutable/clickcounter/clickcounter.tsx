import React, {Dispatch, useEffect, useLayoutEffect, useState} from "react";
import Presenter from "./presenter";
import {Click, ClickCounterViewModelMutator, ClickViewModel, IClick, IClickViewModel, Rx} from "./viewmodel";

const viewModelMutators = ClickCounterViewModelMutator;

interface IProviderProps {
    clickModel: IClick
}

function ClickCounter(props: IProviderProps) {
    // return the components
    const [click, setClickState] = useState(props.clickModel);
    useLayoutEffect(() => {
        Rx.registerObserver(setClickState);
        Rx.sink(props.clickModel)
    }, [])
    return (
        <Presenter clickCount={click.counter}
                   incrementCounter={() => rxIncrementCounter(click)}
                   decrementCounter={() => rxDecrementCounter(click)}/>
    );
}

function rxIncrementCounter(clickModel: IClick) {
    const newClick = viewModelMutators.incrementCount(clickModel);
    // update viewModel here with newClick
    Rx.sink(newClick);
    console.log(newClick.counter);
}

function rxDecrementCounter(clickModel: IClick) {
    const newClick = viewModelMutators.decrementCount(clickModel);
    // update viewModel here with newClick
    Rx.sink(newClick);
    console.log(newClick.counter);
}

export default ClickCounter;