import store from '../store/store.js';
import fs from 'fs';

const getFiles = (path) => {
    const files = fs.readdir(path, (err, files) => {
        files.forEach(file => {
            store.dispatch({ type: 'ADD', payload: { name: file, active: true } })
        });
    });
}
export default getFiles;