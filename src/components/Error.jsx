import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div id="wrapper">
    <img src="https://i.imgur.com/qIufhof.png" alt="error" className='mx-auto w-[500px] h-[400px]' />
    <div id="info">
        <h3 className='font-bold text-4xl mt-[30px] Poppins text-center mb-[50px]'>Uh-Oh...</h3>
        <h3 className='font-bold text-center'>The page you are looking for may have been moved, deleted or, possibly never existed.</h3>
        <Link className="mt-[50px] mb-[50px] text-link flex flex-col items-center justify-center" to="/home" ><button type="submit" className="mx-auto w-[250px] h-[60px]  rounded bg-[#51459E] "><p className=" justify-center text-[#FFF] text-[20px] Poppins font-bold">Back to home</p></button></Link>
    </div>
    </div>
  )
}

export default Error