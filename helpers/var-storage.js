import {LocalStorage} from "./local-storage";
import {ReactiveVar} from "meteor/reactive-var";

export class LocalVarStorage extends LocalStorage {

    cache = null;

    constructor(name, defaultValue) {
        super(name, defaultValue);
    }

    getCache(fetch = true) {
        if (!this.cache) {
            this.cache = new ReactiveVar(fetch ? super.get() : null);
        }
        return this.cache;
    }

    get() {
        return this.getCache().get();
    }

    set(keyOrObject, value) {
        if (typeof keyOrObject === 'string' && value !== undefined) {
            const currentValue = this.get() || {};
            currentValue[keyOrObject] = value;
            this.getCache().set(currentValue);
        } else {
            this.getCache(false).set(keyOrObject);
        }
        localStorage.setItem(this.item_name, JSON.stringify(this.cache.get()));
    }


    setDefault() {
        super.setDefault();
        this.getCache(false).set(this.defaultValue);
    }

    clear() {
        super.clear();
        if (this.cache)
            this.cache.set(null);
    }
}
