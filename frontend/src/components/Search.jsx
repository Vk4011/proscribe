import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


const Search = ({value,onChange,handleSearch,onClearSearch}) => {
  return (
    <>
     <div className='flex items-center justify-center mt-5'>
     <div className="relative bg-gradient-to-br from-blue-300 to-blue-500 rounded-full p-2 grid place-content-center z-0 max-w-[300px] mx-4'
     hover:shadow-2xl ">
    <div className="relative w-full rounded-full bg-gradient-to-br from-blue-200 to-blue-300 p-1 flex items-center">
      <input
        type="text"
        className="p-2 w-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-full focus:outline-none text-blue-400 text-lg placeholder-blue-400"
        placeholder="Search..."
        value={value}
        onChange={onChange}
       
      />
      {value &&
      <IoMdClose 
          className='text-xl text-slate-500 cursor-pointer hover:text-black mr-6' onClick={onClearSearch}/>
        }
        <FaMagnifyingGlass className="text-slate-400 cursor-pointer hover:text-black mr-3" onClick={handleSearch}/>

 
 
    </div>
  </div>
    
     </div>
    </>
  )
}

export default Search