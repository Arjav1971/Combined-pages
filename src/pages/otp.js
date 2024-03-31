import React, { useState, useEffect } from "react";
import logo from '../assets/logo.svg'
import '../container/style/login.css'
import { Carousel } from '../container/components/carousel'
import slides from "../data/carouselData.json";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.clear();
    })

    const handleLogin = () => {
        navigate('/login');
    };

    const [formData, setFormData] = useState({
        number: "",
        otp: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    function handleChange(event) {
        event.preventDefault();
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    console.log(formData.number)
    async function sendOtp(e) {
        e.preventDefault();
        // setErrors(Validation(formData));
        let items = {phoneNumber : formData.number};
        // console.log(formData.email)
        // console.log(formData.password)
        fetch('https://re-bot-backend-ba747145cd34.herokuapp.com/user/login/sendOTP/', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(items),
            data: items,
        })
            .then((result) => {
                console.log(result)
                return result.json();
            }).then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    async function handleSubmitUsingApi(e) {
        e.preventDefault();
        // setErrors(Validation(formData));
        let items = {
            phoneNumber : formData.number,
            otp: formData.otp
        };
        // console.log(formData.email)
        // console.log(formData.password)
        fetch('https://re-bot-backend-ba747145cd34.herokuapp.com/user/login/verifyOTP/', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(items),
            data: formData,
        })
            .then((result) => {
                console.log(result)
                {
                    return result.json();
                }
            }).then((res) => {
                console.log(res)
                sessionStorage.setItem('username', res.number);
                sessionStorage.setItem('jwttoken', res.access);
                navigate('/');
                // console.log(res);
            })
            .catch((error) => {
                navigate('/login/otp');
                console.log(error)
            })
    }


    return (

        <div className="w-full h-screen flex flex-row-reverse items-start">
            <div className="relative w-1/2 h-full flex flex-col ">
                <Carousel data={slides.slides} />
            </div>

            <div className='w-1/2 h-full  bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
                <img className="mr-[24rem]" src={logo} />
                <div className='w-full flex flex-col max-w-[500px]'>
                    <div className='w-full flex flex-col mb-2 '>
                        <h3 className='login font-Raleway'>Login</h3>
                        <p className=' text-[20px] font-normal text-[#686767] mb-10 font-Raleway'>See your growth and get management support. </p>
                    </div>
                    <form onSubmit={handleSubmitUsingApi} >
                    <div class="mb-6">
                        <label for="default-input" class="block mb-2 text-sm font-normal text-[18px] text-[#6c6c6c]">Mobile Number</label>
                        <div className="mb-4 flex">
                            < input name='number' type='text' onChange={handleChange} placeholder='Enter the 6 digit OTP...' id="default-input" class="bg-[#f0f0f0] border border-gray-400 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                            <span className="cursor-pointer flex justify-around items-center " onClick={togglePasswordVisibility}>
                                { formData.number.length === 10  ? <div onClick={sendOtp} className="absolute mr-20 font-semibold text-gray-500">Send OTP</div> : <div className="absolute mr-20 font-semibold text-gray-500"></div> }
                            </span>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="default-input" class="block mb-2 text-sm font-normal text-[18px] text-[#6c6c6c]">OTP</label>
                        <div className="mb-4 flex">
                            < input name='otp' type={
                                showPassword ? "text" : "password"
                            } onChange={handleChange} placeholder='Enter the 6 digit OTP...' id="default-input" class="bg-[#f0f0f0] border border-gray-400 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                            <span className="cursor-pointer flex justify-around items-center " onClick={togglePasswordVisibility}>
                                {showPassword ? < BsEye className="absolute mr-10" size={20} /> : <BsEyeSlash className="absolute mr-10" size={20} />}
                            </span>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center'>
                        </div>
                        <p className='mt-[-18px] text-[18px] text-[#8084a1] font-medium whitespace-nowrap cursor-pointer'><span className='text-[18px] font-normal text-[#9f9f9f] mb-10 font-Raleway mr-1' >Didn't recive an OTP?</span>Resend OTP</p>
                    </div>
                    <button className=' text-[16x] w-full text-[white]  font-Raleway my-2 mt-4 bg-[#9ea1c0] border border-[#4b4b4b4d] font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
                        Login
                    </button>
                    <button onClick={handleLogin} className='text-[16x] w-full text-[#3c3c3c]  font-Raleway my-2 bg-[#edededb9] border border-[#4b4b4b4d] font-semibold rounded-md p-2 text-center flex items-center justify-center cursor-pointer'>
                        Back to Login
                    </button>
                </form>
                </div>
            </div>
        </div>

    )
}

export default Login
