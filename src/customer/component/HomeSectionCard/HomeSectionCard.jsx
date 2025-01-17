import React from 'react'
import "./HomeSectionCard.css";
const HomeSectionCard = ({product}) => {
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (
        <div className='HomeSectionCard cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-[15rem] w-auto h-[19rem] 
        mx-2 border border-blue-300'>
           <div className='h-[13rem] w-[8rem]'>
                <img className='object-cover object-top w-full h-full'
                    src={product.imageUrl} alt="" />
                   <p className="absolute top-2 right-2 text-xs font-bold text-green-500 bg-white rounded-full px-2 py-1">
          {product.discountPercent}%
        </p>   
            </div>
            <div className='textPart p-4'>
                <div className='flex'> 
                <h3 className='text-xs sm:text-sm md:text-base font-medium px-2 text-gray-900 leading-tight'>{product.brand} {product.title}</h3>   
             
                </div>  
             
                <div className='flex items-center justify-center space-x-1'>
                    <p className='mt-2 text-xs text-red-500 line-through opacity-80 '>{formatNumber(product.price)}</p>
                    <p className='mt-2 text-xs text-red-600 font-bold' >{formatNumber(product.discountPrice)}</p>
                 
                </div>
            </div>
        </div>
    );
};

export default HomeSectionCard