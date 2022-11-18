import { makeAutoObservable } from 'mobx';

type ErrorStatusT = 'idle' | 'Not Found' | 'Failed to fetch';
class PageStatusStore {
    status: ErrorStatusT = 'idle';

    constructor() {
        makeAutoObservable(this);
    }

    setStatus(status: ErrorStatusT) {
        this.status = status;
    }

    refreshStatus() {
        this.status = 'idle';
    }
}

const pageStatusStore = new PageStatusStore();
export default pageStatusStore;
