import { createStore } from 'redux';
import { counter } from '../reducers/reducers';

const store = createStore(counter)

export default store;