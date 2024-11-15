// Defining State
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';


// state 
const initialCounterState = {
    count : 0
}
const initialUserState = {
    user : [
        {name : 'Aayman'}
    ]
}

// Action - object - type, payload

const incrementCounter = () =>{
    return {
      type: INCREMENT,
    };
}
const decrementCounter = () =>{
    return {
      type: DECREMENT,
    };
}
const addUser = () => {
  return {
    type: ADD_USER,
    payload : {user : "Abrar"}
  };
};

// Create reducer for counter

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, // if multiple items in the sate then we have define it by a spread operator
                count : state.count + 1,
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            state;
    }
}
