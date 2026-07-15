import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import NavDropdown from 'react-bootstrap/NavDropdown';

import LogoWhite from '../assets/images/logo-white.png';
import SliderOneImg from '../assets/images/banner-1.jpg';
import SliderTwoImg from '../assets/images/banner-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductImg from '../assets/images/Mens/eight.jpg';
import LastestProduct from './common/LatestProducts';
import FeatureProduct from './common/FeatureProduct';
const Home = () => {
    return (
        <>

            <section className='section-1'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={{
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="content" style={{ backgroundImage: `url(${SliderOneImg})` }}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="content" style={{ backgroundImage: `url(${SliderTwoImg})` }}>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className='section-2 py-5'>
                <div className='container'>
                    <h2>New Arrivals</h2>
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <div className='product card border-0'>
                                <div className='card-img'>
                                    <img src={ProductImg} alt="" className='w-100' />
                                </div>
                                <div className='card-body'>
                                    <a href="">red check shirt for mens</a>
                                    <div className='price'>
                                        $29.99
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LastestProduct />
            <FeatureProduct />
            <footer className='py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img src={LogoWhite} alt="" width={150}/>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius minus odit pariatur sit repellat delectus laboriosam. Consectetur omnis in earum debitis. Adipisci aliquid possimus similique expedita? Modi nam quam quae.</p>
                            </div>
                            <div className='col-md-3'>
                                <h3 className='mb-3'>Categories</h3>
                                <ul>
                                    <li>
                                        <a href="">Kids</a>
                                    </li>
                                    <li>
                                        <a href="">Women</a>
                                    </li>
                                    <li>
                                        <a href="">Mens</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-3'>
                                <h3 className='mb-3'>Quick Links</h3>
                                <ul>
                                    <li>
                                        <a href="">Login</a>
                                    </li>
                                    <li>
                                        <a href="">Register</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-3'>
                                
                            </div>
                        </div>
                        <div className='row'>
                            
                        </div>
                    </div>
            </footer>
        </>
    )
}
export default Home