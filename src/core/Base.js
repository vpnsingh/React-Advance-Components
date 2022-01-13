import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../common/Header'
import Home from '../components/Home'
import PageNotFound from '../components/PageNotFound'
import ContextAPI from '../components/context-api/ContextAPI'
import Memo from '../components/Memo'
import Callback from '../components/Callback'
import ReducerDemo from '../components/ReducerDemo'
import ReduxDemo from '../components/redux-demo/ReduxDemo'
import Products from '../components/products/Products'
import AddProduct from '../components/products/AddProduct'

export default function Base() {
    return (
        <main>
            <Router>
                <header>
                    <Header/>
                </header>
                <section className='container'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/usecontext" element={<ContextAPI />} />
                        <Route path="/usememo" element={<Memo />} />
                        <Route path="/usecallback" element={<Callback />} />
                        <Route path="/usereducer" element={<ReducerDemo />} />
                        <Route path="/redux" element={<ReduxDemo />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/addproduct" element={<AddProduct />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </section>
            </Router>
        </main>
    )
}
