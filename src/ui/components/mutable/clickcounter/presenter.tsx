import React, {useEffect} from "react";
import View from "./view";

interface IPresenterProps {
    clickCount: number;
    incrementCounter: () => void
    decrementCounter: () => void
}

function Presenter(props: IPresenterProps) {
    // Presenter should on receive data from the provider that
    // are need to inform the presenter about what the view should
    // display or render
    return (
        <View clickCount={props.clickCount} onReset={props.clickCount >= 5 ? true : false}
              onDecrement={props.decrementCounter} onIncrement={props.incrementCounter}></View>
    )
}

export default Presenter;