import store from '../store/store.js';
import { update, add } from '../actions/actions';
import fs from 'fs';

export const initialState = (path) => {
    const files = fs.readdir(path, (err, files) => {
        files.forEach(file => {
            store.dispatch({ type: 'ADD', payload: { name: file, active: true } })
        });
    });
}

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
            store.dispatch(update(element.name))
        }
    });
}
