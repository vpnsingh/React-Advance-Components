import React, { useState, useEffect } from 'react'
import { addProducts, updateProduct } from '../../config/productsConfig'
import swal from 'sweetalert';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AddProduct() {

    const navigate = useNavigate()
    const location = useLocation()
    const [action, setAction] = useState('Add Product')
    const [productData, setProductData] = useState({
        pname : '',
        price : '',
        quantity : '',
        image : '',
        id : ''
    })

    const { pname, price, quantity, image, id } = productData

    useEffect(() => {
        const { state } = location;
        if(state != undefined){
            setAction('Update Product')
            setProductData({
                ...productData, 
                pname: state.pname,
                price: state.price,
                quantity: state.quantity,
                image: state.image,
                id : state.id
            })
        }
    }, [])

    const handleChange = keyName => event => {
        setProductData({...productData, [keyName] : event.target.value})
    }

    const saveProducts = (e) => {
        e.preventDefault()
        if(pname == '' || price == '' || quantity == '' || image == ''){
            swal('Please fill all the details','', 'error')
            return
        }
        if(action === 'Add Product'){
            addProducts(productData)
            .then((res) => {
                swal('Product Added Successfully !!!', '', 'success')
                setProductData({
                    pname: '', price: '', quantity: '', image: ''
                })
            })    
        }else{
            updateProduct(id, productData)
            .then((res) => {
                swal('Product Updated Successfully !!!', '', 'success')
                .then(updated => updated ? navigate('/products') : '')
            })
        }
    }

    return (
        <div>
             <h3 className='text-center my-3'>{action}</h3>
             <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <form onSubmit={saveProducts}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Product Name</label>
                            <input type="text" className="form-control" placeholder='Enter Product Name'
                                onChange={handleChange('pname')} value={pname} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Product Price</label>
                            <input type="number" className="form-control" placeholder='Enter Product Price' 
                                onChange={handleChange('price')} value={price} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Product Quantity</label>
                            <input type="number" className="form-control" placeholder='Enter Product Quantity'
                                onChange={handleChange('quantity')} value={quantity}  />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Image URL</label>
                            <input type="text" className="form-control" placeholder='Enter Product Image URL'
                                onChange={handleChange('image')} value={image}  />
                        </div>
                        <button className='btn btn-success float-end' type='submit'>{action} Details</button>
                    </form>
                 </div>
             </div>
        </div>
    )
}
