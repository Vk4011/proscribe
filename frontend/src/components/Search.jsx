import React from 'react'

const Search = ({value,onChange,handleSearch,onClearSearch}) => {
  return (
    <>
     <div className='flex items-center justify-center mt-5'>
     <div className="relative bg-gradient-to-br from-blue-300 to-blue-500 rounded-full p-4 grid place-content-center z-0 max-w-[300px] mx-4">
    <div className="relative w-full rounded-full bg-gradient-to-br from-blue-200 to-blue-300 p-1 flex items-center">
      <input
        type="text"
        className="p-2 w-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-full focus:outline-none text-blue-400 text-lg placeholder-blue-400"
        placeholder="Search..."
      />
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 rounded-full border-white border-l-2 border-t-transparent border-b-transparent p-3 mr-4"
      >
        <path
          d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
          fill="white"
        ></path>
      </svg>
    </div>
  </div>
    
     </div>
    </>
  )
}

export default Search