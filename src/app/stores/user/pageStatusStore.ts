import { makeAutoObservable } from 'mobx';

class PageStatusStore {
    isConnected = true;

    constructor() {
        makeAutoObservable(this);
    }

    setConnectionLost() {
        this.isConnected = false;
    }

    refreshStatus() {
        this.isConnected = true;
    }
}

const pageStatusStore = new PageStatusStore();
export default pageStatusStore;
