import { Button, IconButton, colors } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border  rounded-md ">
      <div className="flex items-center justify-between">
      <div className="flex items-center w-full">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="h-full h-full object-cover object-top"
            src="https://res.cloudinary.com/djvvuylii/image/upload/v1723458949/%C4%90%E1%BB%93ng%20H%E1%BB%93/Frederique%20Constant%20FC-259ST5B5%20Classics%20DayDate%2040mm/lnkfhhmtud30rjr3vm5w.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1 text-sm lg:text-base">
          <p className="font-semibold">Rado Couple Classic R22860162</p>
          <p className="opacity-70">Size: 33mm</p>
          <div className='flex space-x-2  lg:space-x-5 items-center  text-gray-900 pt-6'>
              <p className='font-semibold text-red-500'>1000000</p>
              <p className='opacity-50 line-through  text-red-500'>3000000</p>
              <p className="text-green-600 font-semibold">5% off</p>
            
            </div>
        </div></div>
        <div className="lg:flex tẽ items-center lg:space-x-10 pt-4 ">
            <div><Button sx={{color:"RGB(145 85 253)"}}>remove</Button></div>

        </div>
      </div>
    </div>
  );
};

export default CartItem;
