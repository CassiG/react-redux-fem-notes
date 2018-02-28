import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Landing = () => (
  <div className="landing">

  </div>
)

// in es6 so it knows that a bracket is not a function, if you wrap it in paraenthasis it shows that you're returning an object literal
// mapStateToProps takes the whole state of redux and pulls out just the thing that this component cares about, and injects them as a prop to your componenet
// it is assigning state to be the state.searchTerm which is what we difined it to be in our reducers
const mapStateToProps = (state) => ({ searchTerm: state.searchTerm })

//connect is a function that connects redux store to landing. first is what you're using to pull out state and the second is component.
// so first you connect your component to your redux store and then you pull out what you want from it.
export default connect(mapStateToProps)(Landing);
