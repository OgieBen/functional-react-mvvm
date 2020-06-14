// Login
import {decorate, observable} from "mobx";
import {Subject} from "rxjs";
import {Dispatch} from "react";

export interface ILoginViewModel {
    user: User;
    clickCount: number;
}

export class LoginModel implements ILoginViewModel {
    constructor(readonly user: User, readonly clickCount: number = 0) {
    };
}

// User
export interface IUser {
    userName: String;
    password: String;
}

export class User implements IUser {
    constructor(readonly userName: String = "", readonly password: String = "",) {
    };
}

// Click
export interface IClick {
    counter: number;
}

export class Click implements IClick {
    constructor(readonly counter: number = 0) {
    };
}

export class ClickCounterViewModelMutator {
    static getViewModel(): IClickViewModel {
        return new ClickViewModel();
    }

    static updateViewModel(viewModel: IClickViewModel, click: IClick) {
        viewModel.click = click;
    }

    static incrementCount(viewModel: IClick): IClick {
        return new Click(viewModel.counter + 1);
    }

    static decrementCount(viewModel: IClick): IClick {
        return new Click(viewModel.counter - 1);
    }
}

export interface IClickViewModel {
    click: Click;
}

export class ClickViewModel implements IClickViewModel {
    click: Click;

    constructor(click: IClick = new Click()) {
        this.click = click;
    }
}

decorate(ClickViewModel, {
    click: observable
})


//RX

export class Rx {
    static readonly ClickObservable = new Subject<Click>();

    static  registerObserver(f: Dispatch<any>) {
        Rx.ClickObservable.subscribe(f);
    }

    static  sink(c: IClick) {
        Rx.ClickObservable.next(c);
    }

    static getClickObservable() {
        return Rx.ClickObservable
    }
}