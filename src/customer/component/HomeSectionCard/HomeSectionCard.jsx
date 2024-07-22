import React from 'react'

const HomeSectionCard = () => {
   
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border'>
            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full'
                    src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/452446912_10211878359831939_1632538179769143732_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=QGmFEE3toLMQ7kNvgEgIO80&_nc_ht=scontent.fsgn5-8.fna&oh=00_AYDmneRUSXRdT7XSHA_dnUTXKuDwdy2sweenuc6tDC9Pdg&oe=66A47165" alt="" />
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>Tissot Carson PREMIUM 80 T122.407.16.043.00</h3>
                <div className='flex items-center justify-center space-x-4'>
                    <p className='mt-2 text-base text-red-500 line-through opacity-80 font-bold'>80000000</p>
                <p className='mt-2 text-base text-red-600 font-bold' >200000000</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default HomeSectionCard