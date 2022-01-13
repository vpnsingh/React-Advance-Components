import React, { createContext } from 'react'
import EmployeeA from './EmployeeA';
export const myContext=createContext(null);

export default function ContextAPI() {

    const employeeDetails = {
        name : "John Bailey",
        age : 32,
        designation : "Senior Developer",
        mobile : '092634241'
    }

    return (
        <div className='border border-primary my-5 p-4'>
            <myContext.Provider value={employeeDetails}>
                <h3 className='text-center'>Context API works !!!</h3>
                <p className='fw-bold'>Main Component : </p>
                <EmployeeA />
            </myContext.Provider>
        </div>
    )
}
