import React from 'react'
import EmployeeB from './EmployeeB'

export default function EmployeeA() {
    return (
        <div className='border border-secondary p-4'>
            <p className='fw-bold'>Employee - A section</p>
            <hr/>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <EmployeeB />
                </div>
            </div>
        </div>
    )
}
