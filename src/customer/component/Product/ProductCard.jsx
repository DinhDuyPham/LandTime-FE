import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <div className="productCard cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-[15rem] w-auto h-[19rem] 
        mx-3 border px-1 min-w-44">
      <div className="h-[13rem] w-[8rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-2">
        <div>
          {/* <p className="font-bold bg-white p-3 ">{product.brand}</p> */}
          <p className="text-xs sm:text-sm md:text-base font-medium px-2 text-gray-900 leading-tight">{product.title}</p>
        </div>
        <div className="ftext-xs sm:text-sm md:text-base font-medium px-2 text-gray-900 leading-tight">
          {/* <p className="=  text-red-500 line-through opacity-50 ">{ formatNumber(product.discountPrice)}</p>
          <p className="font-semibold  text-red-600">{formatNumber(product.price)}</p>
          <p className="text-green-600 font-semibold">70% off </p> */}
          <div className='flex items-center justify-center space-x-4'>
                    <p className='mt-2 text-xs text-red-500 line-through opacity-80 '>{formatNumber(product.price)}</p>
                    <p className='mt-2 text-xs text-red-600 font-bold' >{formatNumber(product.discountPrice)}</p>
                </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
