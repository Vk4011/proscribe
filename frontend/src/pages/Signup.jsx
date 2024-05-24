import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import PasswordInput from '../components/Password';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/helper';
import axiosInstance from '../utils/axiosinstance'

const Signup = () => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleSignUp = async (e) =>{
        e.preventDefault();
        if (!name) {
            setError("Please enter your name");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email addres.")
            return;
        }
        if (!password) {
            setError("please enter the passworod");
            return;
        }
        setError("")

        //SignUp API Call
        try {
            const response = await axiosInstance.post("/create-account",{
              fullName: name,
              email: email,
              password: password,
            });
      
            //Handle successful registration response
            if (response.data && response.data.error) {
              setError(response.data.message)
              return 
            }
            
            if (response.data && response.data.accessToken) {
                localStorage.setItem("token", response.data.accessToken)
                navigate('/dashboard')
            }
          } catch (error) {
            //Handle Login error
            if (error.response && error.response.data && error.response.data.message) {
              setError(error.response.data.message);
            } else {
              setError("An unexpected error occurred.Please try again.");
            }
          }
    };

  return (
    <>
      <Navbar/>
        <div className='flex items-center justify-center  h-screen'> 
          <div className='w-96 border rounded-2xl bg-blue-300 px-7 py-10 shadow-lg'>
            <form onSubmit={handleSignUp}>
                <h4 className='text-2xl md-7 text-white font-bold'>Signup</h4>
                <br />
                <input 
                    type="text" 
                    placeholder='Name'
                    className='w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none border-blue-400'
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder='Email'
                    className='w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none border-blue-400' 
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <PasswordInput
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />

                {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
                <button type='submit' className='w-full text-sm bg-primary text-white p-2 rounded my-1 hover:bg-blue-600'>
                    Signup
                </button>
                <p className='text-sm text-center mt-4'>
                    Already have account?{" "}
                    <Link to="/login" className="font-medium text-primary underline">
                        Signin
                    </Link>
                </p>
            </form>
          </div>
        </div>
    </>
  )
}

export default Signup
