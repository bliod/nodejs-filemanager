import express from 'express';
import store from './store/store.js';
import path from 'path';
import { initialState, findAndAdd, findAndUpdate } from './utils/utils.js';
import fs from 'fs'

const app = express()
const port = 3000
const currentPath = path.resolve(__dirname, '../public');

const dirFiles = fs.readdirSync(currentPath);
findAndAdd(dirFiles)

app.get('/', (req, res) => {
    res.send('ok')
})

app.get('/list', (req, res) => {
    let state = store.getState();
    res.json(state)
})

app.get('/scan', (req, res) => {
    const files = fs.readdirSync(currentPath)
    findAndAdd(files)
    findAndUpdate(files)
    let state = store.getState();
    res.json(state)
})

app.get('/download-state', (req, res) => {
    res.setHeader('Content-disposition', 'attachment; filename= state.json');
    res.setHeader('Content-type', 'application/json');
    let state = store.getState();
    res.json(state)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})