import React, { useState, useEffect } from 'react'
import { getProducts, deleteProduct } from '../../config/productsConfig'
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

export default function Products() {

    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = () => {
        getProducts()
        .then((res) => {
            setProducts(res.data)
        })
    }

    const addtoCart = (id) => {
        if(localStorage.getItem('product-cart') != undefined){
            let isAlreadyAdded = false
            let cartArr = JSON.parse(localStorage.getItem('product-cart'))
            for(let p of cartArr){
                if(p.id == id){
                    isAlreadyAdded = true
                }
            }
            if(isAlreadyAdded) {
                swal('Product Already Added !!!')
            }else{
                let obj = { id:id, quantity: 1 }
                cartArr.push(obj)
                localStorage.setItem('product-cart', JSON.stringify(cartArr))
                swal('Added to cart successfully !!!', '', 'success')
            }
        }else{
            let cartArr = []
            let obj = { id:id, quantity: 1 }
            cartArr.push(obj)
            localStorage.setItem('product-cart', JSON.stringify(cartArr))
            swal('Added to cart successfully !!!', '', 'success')
        }
    }
    
    const editProduct = (item) => {
        navigate('/addproduct', { state : item })
    }

    const removeProduct = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this product ?",
            icon: "warning",
            dangerMode: true,
        })
        .then(willDelete => {
            if (willDelete) {
                deleteProduct(id).then(() => {
                    swal("Deleted!", "Your Product has been deleted successfully !", "success");
                    getAllProducts()
                })
            }
        });
    }

    return (
        <div>
            <h3 className='text-center my-3'>Trending Products</h3>
            <Link to="/addproduct">
                <button className='btn btn-primary float-end'>Add New Product</button>
            </Link>
            <br/><br/>
            <div className='row'>
                {
                    products.map((item,index) => {
                        return  <div className='col-md-4 mb-4' key={index}> 
                                    <div className="card">
                                    <img className="card-img-top" height="300px"
                                        src={item.image} alt={item.pname} />
                                    <div className="card-body">
                                        <h4 className="card-title">{item.pname}</h4>
                                        <p className="card-text d-flex justify-content-between">
                                            <span>Rs. {item.price}</span>
                                            <span className='badge bg-secondary'>{item.quantity} items left</span>
                                        </p>
                                        <div className='btn-group'>
                                            <button className='btn btn-outline-primary' onClick={() => addtoCart(item.id)}>
                                                Add to cart
                                            </button>
                                            <button className='btn btn-outline-success' onClick={() => editProduct(item)}>
                                                Edit
                                            </button>
                                            <button className='btn btn-outline-danger' onClick={() => removeProduct(item.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
