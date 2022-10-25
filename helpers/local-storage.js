
export class LocalStorage {
    item_name = null;
    defaultValue = null;

    constructor(name, defaultValue) {
        this.item_name = name;
        this.defaultValue = defaultValue;
    }

    get() {
        return JSON.parse(localStorage.getItem(this.item_name));
    }

    set(keyOrObject, value) {
        let target;
        if (typeof keyOrObject === 'string' && value !== undefined) {
            target = this.get() || this.defaultValue || {};
            target[keyOrObject] = value;
        } else {
            target = value;
        }
        localStorage.setItem(this.item_name, target && JSON.stringify(target));
    }

    setDefault() {
        localStorage.setItem(this.item_name, this.defaultValue && JSON.stringify(this.defaultValue));
    }

    clear() {
        localStorage.removeItem(this.item_name);
    }
}
