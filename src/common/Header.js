import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

    const [cartCount, setCartCount] = useState(0)

    useEffect(()=>{
        if(localStorage.getItem('product-cart')!=undefined){
            let arr=JSON.parse(localStorage.getItem('product-cart'));
            setCartCount(arr.length)
        }
    },[])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Project Title</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/usecontext'>Context API</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/usememo'>Memo Example</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/usecallback'>Callback Example</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/usereducer'>Reducer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/redux'>Redux</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/products'> 
                                Products <span className='badge bg-warning'>{cartCount}</span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
