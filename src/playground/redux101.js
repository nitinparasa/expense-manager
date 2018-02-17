import {createStore} from 'redux';

// Action generators - functions that return the action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({ //destrcuturing the payload object
    type : 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 0} = {}) => ({ 
    type: 'SET',
    count
 });

 const resetCount = () => ({
     type: 'RESET'
 });

// Reducers 
// 1. There can be multiple reducers.
// 2. Reducers are pure functions - interacts with parameters only in the function scope
// 3. Never change the state or action.
const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default: 
            return state;
    }
};

//pass the current state to the createStore - createStore a.k.a Reducer
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - manipulate the store object
// store.dispatch({
//     type: 'INCREMENT', // These names need can be anything. As long as the type in condition matches with the one here 
//      incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount({ incrementBy: 3 }));

store.dispatch(decrementCount({ decrementBy: 1 }));
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(decrementCount());

store.dispatch(setCount( {count: 2532}));

store.dispatch(resetCount());

store.dispatch(incrementCount({ incrementBy: 32 }));

