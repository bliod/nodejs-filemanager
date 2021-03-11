import express from 'express';
import store from './store/store.js';
import path from 'path';
import getFiles from './utils/getFiles.js';
import fs from 'fs'
const app = express()
const port = 3000
const currentPath = path.resolve(__dirname, '../public');

getFiles(currentPath)

app.get('/', (req, res) => {
    res.send('ok')
})
app.get('/list', (req, res) => {
    let state = store.getState();
    res.json(state)
})
app.get('/scan', (req, res) => {

    const files = fs.readdirSync(currentPath)

    let state = store.getState();

    files.forEach(el => {
        let found = state.find(val => val.name === el)
        if (!found) {
            store.dispatch({ type: 'ADD', payload: { name: el, active: true } })
        }
    })

    state.forEach(element => {
        let found = files.find(val => val === element.name)
        if (!found) {
            store.dispatch({ type: 'UPDATE', target: element.name })
        }

    });

    let stateLatest = store.getState();
    res.json(stateLatest)
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