// Login
import {decorate, observable} from "mobx";

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
    click: IClick;
}

export class ClickViewModel implements IClickViewModel {
    click: IClick;

    constructor(click: IClick = new Click()) {
        this.click = click;
    }
}

decorate(ClickViewModel, {
    click: observable
})