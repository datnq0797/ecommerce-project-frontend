import React, { useContext } from 'react'
import { AdminAuthContext } from '../context/AdminAuth'
import { Link } from 'react-router-dom'
import Layout from './Layout';
const Sidebar = () => {
    const { logout } = useContext(AdminAuthContext);
    return (
        <div className='card shadow sidebar mb-5'>
            <div className='card-body p-4'>
                <ul>
                    <li>
                        <a href="/admin/dashboard">Dashboard</a>
                    </li>
                    <li>
                        <Link to="/admin/categories">Categories</Link>
                    </li>
                    <li>
                        <a href="">Brands</a>
                    </li>
                     <li>
                        <a href="">Products</a>
                    </li>
                     <li>
                        <a href="">Orders</a>
                    </li>
                     <li>
                        <a href="">User</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
