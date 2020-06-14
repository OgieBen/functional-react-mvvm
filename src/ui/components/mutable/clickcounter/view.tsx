import React from "react";
import './style/style.css'

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
            {/* if onReset is true show reset button */}
            {/*{props.onReset ? (<p className="activeButtonInfo">Reset Button Enabled</p>) : (<p className="inactiveButtonInfo">Reset Button Disabled</p>)}*/}
            <div className="counterBox">
                <div className="displayBox" onClick={props.onIncrement}>
                    <p className={`operatorIcon`}>+</p>
                </div>
                <div className="divider"><p></p></div>
                <div className={`displayBox operatorIcon`}><p>{props.clickCount}</p></div>
                <div className="divider"><p></p></div>
                <div className="displayBox" onClick={props.onDecrement}>
                    <p className={`operatorIcon`}>-</p>
                </div>

            </div>
        </div>
    );
}

export default View;