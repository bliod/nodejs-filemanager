import store from '../store/store.js';
import { update, add } from '../actions/actions';

export const findAndAdd = (files) => {
    let state = store.getState();
    files.forEach(el => {
        let found = state.find(val => val.name === el)
        if (!found) {
            store.dispatch(add(el))
        }
    })
}

export const findAndUpdate = (files) => {
    let state = store.getState();
    state.forEach(element => {
        let found = files.find(val => val === element.name)
        if (!found) {
            if (element.active) {
                console.log('dispatch', element.name)
                store.dispatch(update(element.name))
            }
        } else {
            if (!element.active) {
                console.log('dispatch to true', element.name)
                store.dispatch(update(element.name))
            }
        }
    });
}
