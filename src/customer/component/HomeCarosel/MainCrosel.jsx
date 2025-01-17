import React from 'react'
import { mainCarouselData } from './MainCaroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
const MainCrosel = () => {
    const items = mainCarouselData.map((item) => <img className='cursor-pointer ' role='presentation' src={item.image} alt="" />)
    return (
        <div className='relative z-10'> <AliceCarousel
        items={items}
        autoPlay
        disableButtonsControls
        disableDotsControls
        infinite
        autoPlayInterval={3000}
    /></div>
       
    )
}

export default MainCrosel