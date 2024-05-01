import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import { validateEmail } from '../utils/helper';
import Password from '../components/Password';

const Signup = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState(null);
    const [error,setError] = useState(null);


    const handleSignup = async(e)=>{
        e.preventDefault();
        if(!name){
            setError("please enter your name");
            return ;
        }
        if(!validateEmail(email)){
            setError("please enter a valid email address. ");
            return ;
        }
        if(!password){
            setError("please enter the password");
            return ;

        }
        setError('')

    }
  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center mt-28 ' >
        <div className='w-96 border rounded-xl  px-7 py-10 hover:shadow-xl '>
            <form onSubmit={handleSignup}>
            <h4 className='text-2xl mb-7 font-bold'>signup</h4>
            <input 
                            type="text" 
                            placeholder='Name' 
                            className='input-box'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />

                <input 
                            type="text" 
                            placeholder='email' 
                            className='input-box'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />

                <Password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />

                        <button type="submit" className='btn-primary'>
                           Create Account
                        </button>

                        <p className='text-sm text-center mt-4'>
                           
                           Already have an account ? 
                            <Link to="/login" className='font-medium text-primary underline'>
                                Login
                            </Link>
                        </p>

            </form>

        </div>

    </div>
    </>
  )
}

export default Signup