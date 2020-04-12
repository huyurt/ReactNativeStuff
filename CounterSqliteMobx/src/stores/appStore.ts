import {RootStore} from "./rootStore";
import {action, observable} from "mobx";

export default class AppStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @observable appLoaded: boolean = false;
    @observable containerLoaded: boolean = false;

    @action setAppLoaded = () => {
        this.appLoaded = true;
    };

    @action setContainerLoaded = () => {
        this.containerLoaded = true;
    };
}