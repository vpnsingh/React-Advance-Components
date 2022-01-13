import React, { useState, useCallback } from 'react'
const funccount = new Set();

export default function Callback() {
    
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
   
    const incrementCounter = useCallback(() => {
        setCount(count + 1)
    }, [count])
    const decrementCounter = useCallback(() => {
        setCount(count - 1)
    }, [count])
    const incrementNumber = useCallback(() => {
        setNumber(number + 1)
    }, [number])

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    console.log(funccount.size);

    return (
        <div>
            <h3 className='text-center mb-3'>useCallback works !!!</h3>
            <p>
                The useCallback hook is used when you have a component in which the child is 
                rerendering again and again without need
            </p>
            <p>Count : {count}</p>
            <div className='btn-group'>
                <button className="btn btn-outline-primary" onClick={incrementCounter}>
                    Increase counter
                </button>
                <button className="btn btn-outline-danger" onClick={decrementCounter}>
                    Decrease Counter
                </button>
                <button className="btn btn-outline-success" onClick={incrementNumber}>
                    Increase number
                </button>
            </div>
           
        </div>
    )
}
