import React, {useEffect} from "react";
import View from "./view";

interface IPresenterProps {
    clickCount: number;
    incrementCounter: () => void
    decrementCounter: () => void
}

function Presenter(props: IPresenterProps) {
    // Presenter should only receive data from the provider that
    // is needed to make decisions about how the view should be
    // displayed or rendered
    return (
        <View clickCount={props.clickCount} onReset={props.clickCount >= 5 ? true : false}
              onDecrement={props.decrementCounter} onIncrement={props.incrementCounter}></View>
    )
}

export default Presenter;