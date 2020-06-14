import {Click, IClick, Rx} from "../clickcounter/viewmodel";
import React, {Dispatch, useLayoutEffect, useState} from "react";

export default function SimpleHeader(clickCounterModel: Click) {
    const [counter, setState] = useState(clickCounterModel.counter)
    useLayoutEffect(() => {
        registerObservable((click: IClick) => setState(click.counter))
    })

    return <>            {counter >= 5 ? (
        <p className="activeButtonInfo">Reset Button Enabled</p>) : (
        <p className="inactiveButtonInfo">Reset Button Disabled</p>)}</>;
}

function registerObservable(f: Dispatch<any>) {
    Rx.getClickObservable().subscribe(f)
}