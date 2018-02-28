import { SET_SEARCH_TERM } from './actions'

// you are importing the term SET_SEARCH_TERM from that ceneralized actions area we just created
// what this does is takes in a search term and then returns a formated action for the reducer which goes into redux reducer and switch on that action type
// you create a function that takes in the search term and returns an action object.
// searchTerm is passing in the search term that was created on landing page and handed over to here
//its creating an object action that will update the searchTerm to this new term
export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  }
}
