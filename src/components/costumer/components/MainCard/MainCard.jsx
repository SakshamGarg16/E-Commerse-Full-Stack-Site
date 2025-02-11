import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainCard = ({product}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${6}`)} className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3' >
        <div className='h-[13rem] w-[10rem]'>
            <img src={product.imageUrl} className='object-cover object-top w-full h-full' alt="" />
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
            <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
        </div>
    </div>
  )
}

export default MainCard