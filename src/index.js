import express from 'express';
import store from './store/store.js';
import path from 'path';
import { initialState, findAndAdd, findAndUpdate } from './utils/utils.js';
import fs from 'fs'

const app = express()
const port = 3000
const currentPath = path.resolve(__dirname, '../public');

initialState(currentPath)

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

app.get('/download-state', async (req, res) => {
    let state = store.getState();
    await fs.writeFileSync(path.resolve(__dirname, 'stateObject.txt'), JSON.stringify(state))
    const file = `${__dirname}/stateObject.txt`;
    res.download(file)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})