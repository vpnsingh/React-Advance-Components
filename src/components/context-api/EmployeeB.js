import React, { useContext } from 'react'
import { myContext } from './ContextAPI'

export default function EmployeeB() {

    const employeeData = useContext(myContext)
    
    return (
        <div className='border border-success p-4'>
            <p className='fw-bold'>Employee B Section</p>
            <table className='table'>
                <tr>
                    <th>Employee Name</th>
                    <td>{employeeData.name}</td>
                </tr>
                <tr>
                    <th>Employee Age</th>
                    <td>{employeeData.age}</td>
                </tr>
                <tr>
                    <th>Employee Designation</th>   
                    <td>{employeeData.designation}</td>                 
                </tr>
                <tr>
                    <th>Employee Mobile No.</th>
                    <td>{employeeData.mobile}</td>
                </tr>
            </table>
        </div>
    )
}
