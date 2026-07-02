import React from 'react';
import { useForm } from "react-hook-form";
import Layout from '../common/Layout';
import { apiUrl } from '../common/http';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        console.log(data);
        const res = await fetch(`${apiUrl}/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(result => {
            console.log(result)
            if (result.errors.email) {
                toast.error(result.errors.email[0]);
            }

            if (result.errors.password) {
                toast.error(result.errors.password[0]);
            }
            if (result.status == 200) {
                const adminInfo = {
                    token: result.token,
                    id: result.id,
                    name: result.name
                }
                localStorage.setItem('adminInfo', JSON.stringify(adminInfo));
                navigate('/admin/dashboard');
            } else {
                toast.error(result.message);
            }
        });
    }
    return (
        <Layout>
            <div className='container d-flex justify-content-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="login-wrapper">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h3>Admin Login</h3>
                                <div id="error-box" className="alert alert-danger d-none" role="alert"></div>
                                <div className="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input {...register("email", { required: true })} className={errors.password ? "form-control is-invalid" : "form-control"} placeholder="Email" />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input {...register("password", { required: true })} className={errors.password ? "form-control is-invalid" : "form-control"} placeholder="Password" />
                                    {errors.password && <span>This field is required</span>}
                                </div>
                                <button id="btn-login" className="btn btn-secondary w-100">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
export default Login
