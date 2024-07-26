import React from 'react'
import AliceCarousel from 'react-alice-carousel'

import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
const HomeSectionCarosel = ({ data, sectionName }) => {
    const responsive = {
        0: { items: 1 },
        300: { items: 2 },
        720: { items: 3 },
        1024: { items: 5 },
        1200: { items: 6 },
        1400:{items: 7},
    };
    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />)



    return (
        <div>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className="relative  " >
                <div className=" pt-4 pl-5 border">
                    <AliceCarousel
                        items={items}
                        disableButtonsControls
                        responsive={responsive}
                    />
                </div>
            </div>
        </div>


    )
}

export default HomeSectionCarosel