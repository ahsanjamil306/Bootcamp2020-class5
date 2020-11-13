import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';




const Child2 = () => { 


    let [state, dispatch] = useReducer( CounterReducer, 1 );
    


    return (

        <div>
            <h1>This is Second child using Reducer</h1>
            <h2>value of reducer state is : {state}</h2>
            <button onClick= {() =>dispatch('INCREMENT')}> INCREMENT REDUCER</button>
            <button onClick= {() =>dispatch('DECREMENT')}> DECREMENT REDUCER</button>
        </div>
    )
}


export default Child2