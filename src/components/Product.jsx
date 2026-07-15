import React from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
const Product = () => {
    return (
        <Layout>
            <div className='container '>
                <nav aria-label="breadcrumb" className='py-4'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/shop">Shop</Link></li>
                        <li className="breadcrumb-item " aria-current="page"><Link to="/abc">Dummy Product Title</Link></li>
                    </ol>
                </nav>
            </div>
        </Layout>
    )
}

export default Product
