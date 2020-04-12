import {RootStore} from "./rootStore";
import {action, computed, observable, runInAction} from "mobx";
import {getCounter, setCounter} from "../database/dbContext";

export default class CounterStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    getNextScreenName(screenIndex: number): string {
        const screenName = computed((): string => {
            switch (screenIndex) {
                case 1:
                    return "Second";
                case 2:
                    return "First";
                default:
                    return "First";
            }
        });
        return screenName.get();
    }

    @observable counter: number = 0;

    @action getFirstCounter = async () => {
        try {
            const countValue = await getCounter();
            runInAction(() => {
                this.counter = countValue?.Count ?? 0;
            });
        } catch (error) {
            throw error;
        }
    };

    @action changeCounter = async (nextValue: number) => {
        try {
            runInAction(() => {
                this.counter += nextValue;
            });
            await setCounter(this.counter);
        } catch (error) {
            throw error;
        }
    };
}