import { SET_SEARCH_TERM } from './actions';

// Step 1 define default state:
const DEFAULT_STATE = {
  searchTearm: ''
}

// setSearchTerm is also a reducer, the root reducer deligates to the setSearchTearm reducer
// reducer: anything that takes in state and action and returns new state. The new state is action.payload
const setSearchTerm = (state, action) => {
  // this is going to create a new object - that is what the empty {} are for.
  // merge all the state and then it gets the payload from the action.
  // default state is blank but this takes that in and uses the default state, but then updates searchTerm with the new state - that is what action.payload is, so action is just passing in that state.
  return Object.assign({}, state, { searchTerm: action.payload })
}
// Migrate searchTerm = Searching available from the redux store
// FLow helps Redux but it's a level of complexity
// everything has one reducer that takes in state (state = DEFAULT_STATE) and it takes in an action (action). pass that action into a switch, and get the type
// if it doesn't know the action type, it's just going to give you back state as is
// actions are objects
const rootReducer = (state = DEFAULT_STATE, action) => {

  //actions are object. They have a
  //{
  //type: string and a
  //payload: string, boolean, anything
  // you can also have error: and metadata:
  //}

  switch(action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
}

export default rootReducer;
