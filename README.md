Flux vs Redux >

A way to have data stores that translate to views.

1 redux store. Top level function is a reducer. Function that takes a state and action and gives you a new state. It's a way of state managment. Taking data out of react.
-Tons of component worrying about the same state and that's what redux is for.  
-Creates cenralized state. Doesn't have to all live in app if every component needs to talk to it.
- Takes a lot of time to pass data from the top down, aleviates data tunnling. 
