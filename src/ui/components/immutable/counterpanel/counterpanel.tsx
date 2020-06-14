import React from "react";
import './style/style.css'
export default function CounterPanel(props: { onClick: () => void, clickCount: number, onClick1: () => void }) {
    return <div className="counterBox">
        <div className="displayBox" onClick={props.onClick}>
            <p className={`operatorIcon`}>+</p>
        </div>
        <div className="divider"><p></p></div>
        <div className={`displayBox operatorIcon`}><p>{props.clickCount}</p></div>
        <div className="divider"><p></p></div>
        <div className="displayBox" onClick={props.onClick1}>
            <p className={`operatorIcon`}>-</p>
        </div>

    </div>;
}
