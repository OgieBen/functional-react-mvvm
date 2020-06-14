import React from "react";
import './style/style.css'
export default function CounterPanel(props: { onIncrement: () => void, clickCount: number, onDecrement: () => void }) {
    return <div className="counterBox">
        <div className="displayBox" onClick={props.onIncrement}>
            <p className={`operatorIcon`}>+</p>
        </div>
        <div className="divider"><p></p></div>
        <div className={`displayBox operatorIcon`}><p>{props.clickCount}</p></div>
        <div className="divider"><p></p></div>
        <div className="displayBox" onClick={props.onDecrement}>
            <p className={`operatorIcon`}>-</p>
        </div>

    </div>;
}
