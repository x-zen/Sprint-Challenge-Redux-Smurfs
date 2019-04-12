1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, concat, filter, assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store - holds the state for entire application
actions - object that dispatches instructions that are passed into the reducer to modify the store
reducers - pure functions that calculate the new version of state based on current state and what gets passed in

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application - (global) used for data that needs to be accessed multiple places in your app
Component - (local) used for data specific to the operation of a single component

1.  What is middleware?

a bridge between your app and its database/api

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk enables the use of async actions

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()
