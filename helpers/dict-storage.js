import {ReactiveDict} from 'meteor/reactive-dict';
import {LocalStorage} from "./local-storage";

export class LocalDictStorage extends LocalStorage {

    cache = null;

    constructor(name, defaults) {
        super(name, defaults);
    }

    getCache() {
        if (!this.cache) {
            this.cache = new ReactiveDict(this.item_name, super.get() || this.defaultValue || {});
            if (this.defaultValue) {
                this.cache.setDefault(this.defaultValue);
            }
        }
        return this.cache;
    }

    get(key) {
        if (key)
            return this.getCache().get(key);
        else
            return this.getCache().all();
    }

    set(keyOrObject, value) {
        this.getCache().set(keyOrObject, value);
        localStorage.setItem(this.item_name, JSON.stringify(this.getCache().all()));
    }

    setDefault() {
        super.setDefault();
        this.getCache().setDefault(this.defaultValue);
    }

    clear() {
        super.clear();
        if (this.cache)
            this.cache.clear();
    }
}
