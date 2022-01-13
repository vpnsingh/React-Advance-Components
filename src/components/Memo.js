import React, { useState, useMemo } from 'react'

export default function Memo (){

    const squareNumber = (number) => {
        console.log("Square will be done");
        return Math.pow(number,2);
    }

    const [number,setNumber] = useState(0);
    const [counter,setCounter] = useState(0);

    // const squareNum=squareNumber(number);
    const squareNum=useMemo(() => {
        return squareNumber(number)
    }, [number])

    const onChangeHandler=(e)=>{
        setNumber(e.target.value);
    }

    const counterHandler=()=>{
        setCounter(counter+1);
    }

    return (
        <div>
            <h3 className='text-center mb-5'> useMemo works !!! </h3>
            <p>
                React has a built-in hook called useMemo that allows you to memoize expensive functions 
                so that you can avoid calling them on every render.
            </p>
            <input type="number" placeholder='Enter a number' className='form-control'
                value={number} onChange={onChangeHandler}/>
            <br/>
            <div className='bg-light p-2 border '> OUTPUT = {squareNum} </div>
            <br/>
            <button onClick={counterHandler} className='btn btn-secondary'>Another Event ++</button>
        </div>
    )
}


