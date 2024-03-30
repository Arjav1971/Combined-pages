import React, { useState  , useEffect} from "react";
import googleLogo from '../assets/google3.svg'
import logo from '../assets/logo.svg'
import '../container/style/login.css'
import {Carousel}  from '../container/components/carousel'
import slides from "../data/carouselData.json";
import { useNavigate } from 'react-router-dom';



const Login = () =>{

    const navigate = useNavigate();
    const handleGoogle = () => {
        // navigate('/inventory/propertylocation');
    };
    const handleEmail = () => {
        navigate('/login/email');
    };
    const handleOtp = () => {
        navigate('/login/otp');
    };
    return (
        <div className="w-full h-screen flex flex-row-reverse items-start">
            <div className="relative w-1/2 h-full flex flex-col ">
                <Carousel data= {slides.slides}/>
            </div>
            <div className='w-1/2 h-full  bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
                <img className="mr-[24rem]" src={logo}/>
                <div className='w-full flex flex-col max-w-[500px]'>
                    <div className='w-full flex flex-col mb-2 '>
                        <h3 className='login font-Raleway'>Login</h3>
                        <p className=' text-[20px] font-normal text-[#686767] mb-10 font-Raleway'>See your growth and get management support. </p>
                    </div>
                     <button className=' text-[16x] w-full text-[#3c3c3c]  font-Raleway my-2 bg-[#edededb9] border border-[#4b4b4b4d] font-semibold rounded-md p-3 text-center flex items-center justify-center cursor-pointer'>
                        <img src={googleLogo} className='h-7 mr-2'/>    Continue with Google
                    </button>
                    <button onClick={handleEmail} className=' text-[16x] w-full text-[#3c3c3c]   font-Raleway my-2 bg-[#edededb9] border border-[#4b4b4b4d] font-semibold rounded-md p-3 text-center flex items-center justify-center cursor-pointer'>
                           Continue with Email
                    </button>
                    <button onClick={handleOtp} className='text-[16x] w-full text-[#3c3c3c]  font-Raleway my-2 bg-[#edededb9] border border-[#4b4b4b4d] font-semibold rounded-md p-3 text-center flex items-center justify-center cursor-pointer'>
                           Continue with Mobile
                    </button>

                </div>
                <div className='w-full flex item-center justify-center'>
                    <p className='text-[18x] font-normal text-[#060606]'>Not partnered yet? <span className=' text-[18x] font-bold cursor-pointer text-blue-800 '>Partner with us now </span></p>

                </div>
            </div>
        </div>

    )
}

export default Login