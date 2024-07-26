import React from 'react'
import MainCrosel from '../../component/HomeCarosel/MainCrosel'
import HomeSectionCarousel from '../../component/HomeSectionCarosel/HomeSectionCarosel'
import { Watch } from '../../Data/Data'
import Footer from '../../component/Footer/Footer'


const HomePage = () => {
  return (
    <div>
       <MainCrosel />
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={Watch} sectionName={"Đồng Hồ Nam"}/>
            <HomeSectionCarousel data={Watch} sectionName={"Đồng Hồ Nữ"}/>
            <HomeSectionCarousel data={Watch} sectionName={"Phụ Kiện Đồng Hồ"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage