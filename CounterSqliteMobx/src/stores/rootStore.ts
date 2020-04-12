import CounterStore from "./counterStore";
import {configure} from "mobx";
import {createContext} from "react";
import AppStore from "./appStore";

configure({ enforceActions: "always" });

export class RootStore {
    appStore: AppStore;
    counterStore: CounterStore;

    constructor() {
        this.appStore = new AppStore(this);
        this.counterStore = new CounterStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());