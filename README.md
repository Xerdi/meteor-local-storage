# Meteor Local Storage

Local Storage helpers for Meteor with `ReactiveVar` and `ReactiveDict`.

## Installation

Add the package to your project:

```shell
meteor add xerdi:local-storage
```

## Usage

The package exports three classes which can be used similarly.

```ecmascript 6
import {LocalStorage, LocalVarStorage, LocalDictStorage} from 'xerdi:local-storage';

const defaults = {
    a: true,
    b: 5,
    c: 'text'
};

export const mySettings = new LocalDictStorage('mySettings', defaults);
```

## API

Both `LocalVarStorage` and `LocalDictStorage` extend from `LocalStorage`.

### LocalStorage

 - `constructor` Takes a storage key and an object with default values.
 - `get()` Gets the stored values.
 - `set(keyOrObject, value)` Either gets an object for setting all values or a key and value to set.
 - `setDefault()` Sets all values to their default value.
 - `clear()` Wipes the stored data.
