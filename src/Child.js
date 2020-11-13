import  React, {useContext} from 'react';
import counterContext from './CounterContext';



const Child = () => {

    let counterValue = useContext(counterContext)
    

    return (
        <div>
            <h1>This is first child using Context api</h1>
            <h4>Counter value is : {counterValue[0]}</h4>
            <button onClick={ () => {counterValue[1](++counterValue[0])}}>Increment</button>
            
        </div>
    );
}

 export  default Child;