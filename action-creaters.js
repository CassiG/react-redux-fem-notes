import { SET_SEARCH_TERM } from './actions'

// you are importing the term SET_SEARCH_TERM from that ceneralized actions area we just created
// what this does is takes in a search term and then returns a formated action for the reducer which goes into redux reducer and switch on that action type
// you create a function that takes in the search term and returns an action object.
export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  }
}
