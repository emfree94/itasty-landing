import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './animationLine.scss'
import 'swiper/css'
import { Autoplay } from 'swiper'

export const AnimationLine = () => {
  const listData = [
    'Smart tips',
    'QR Menu',
    'Simple and Easy',
    'Restaurants',
    'Bars',
    'Simple and Easy',
    'ITasty landing',
  ]

  return (
    <div className="animation-line">
      <Swiper
      className='animation-line__swiper'
        effect="slide"
        spaceBetween={30}
        slidesPerView='auto'
        loop={true}
        speed={3000}
        centeredSlides={false}
        centeredSlidesBounds={true}
        autoplay={{
          delay: 600,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        modules={[Autoplay]}
      >
        <ul className="animation-line__list">
          {listData.map((list, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="animation-wrapper">
                  <div className="animation-dot" />
                  <li className="animation-list">{list}</li>
                </div>
              </SwiperSlide>
            )
          })}
        </ul>
      </Swiper>
    </div>
  )
}
