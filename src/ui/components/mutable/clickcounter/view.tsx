import React from "react";
import './style/style.css'
import CounterPanel from "../../immutable/counterpanel/counterpanel";

interface ViewProps {
    clickCount: number;
    onIncrement: () => void
    onDecrement: () => void
    onReset: boolean;
}


function View(props: ViewProps) {
    // return actual view items here
    return (
        <div>
            <CounterPanel onClick={props.onIncrement} clickCount={props.clickCount} onClick1={props.onDecrement}/>
        </div>
    );
}

export default View;