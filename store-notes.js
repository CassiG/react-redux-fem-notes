import { createStore } from 'redux';
import reducer from './reducers-notes.js'

// This is your actual state mamanagment store. createStore is a redux function that creates a store from the reducer - which as we know has a state and an action
const store = createStore(reducer)

// this exports your store to for use.
export default store;

// this also holds middleware if you have it
