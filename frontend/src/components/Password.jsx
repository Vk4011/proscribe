import React from 'react'
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"

const Password = ({value, onChange,placeholder}) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }

  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3  border-blue-400'>
      <input 
      value={value} 
      onChange={onChange} 
      type={isShowPassword ? "text" : "Password"} 
      placeholder={placeholder || "Password"}
      className='w-full text-sm bg-transparent py-3 rounded outline-none'/>
      {isShowPassword ? (
        <FaRegEye
        size={27}
        className="text-primary cursor-pointer"
        onClick={() => toggleShowPassword()}
        />
      ):(
        <FaRegEyeSlash
        size={22}
        className='text-slate-400 cursor-pointer'
        onClick={()=>toggleShowPassword()}
        />
      )}
    </div>
  )
}

export default Password
