import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearchTerm } from './actionCreators';

//its getting the props from search tearm redux
const Landing = (props: { searchTerm: string }) => (
  <div className="landing">
      // This is passing that state into your componenet
      <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" />
  </div>
)

// in es6 so it knows that a bracket is not a function, if you wrap it in paraenthasis it shows that you're returning an object literal
// mapStateToProps takes the whole state of redux and pulls out just the thing that this component cares about, and injects them as a prop to your componenet
// it is assigning state to be the state.searchTerm which is what we difined it to be in our reducers
const mapStateToProps = (state) => ({ searchTerm: state.searchTerm })

// this creates a method that landing can invoke to dispatch events to redux. it's passing in those action that redux needs to update the state.
// It gonna return an object
// it's passing that event.target.valu. this is giving ti to actionCreators
// This is taking in what has been added to the input box, so taking what the user types and maps it to set search term
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm (event.target.value));
  }
})

//connect is a function that connects redux store to landing. first is what you're using to pull out state and the second is component.
// so first you connect your component to your redux store and then you pull out what you want from it.
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
