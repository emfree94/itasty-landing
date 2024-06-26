import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import './tariffPlan.scss'
import { Card } from '../card/Card'

export const TariffPlan = () => {
  const planData = [
    {
      card_head: 'BASIC PLAN',
      card_price: '$0',
      card_period: 'Per month',
      card_description:
        'Lorem ipsum dolor sit amet consectetur. Praesent amet dignissim pretium congue consectetur orci augue mi. Donec cursus lacus laoreet feugiat in fermentum sem purus.',

      card_options: [
        {
          card_icon: 'public/assets/check-circle.svg',
          card_option_text: 'Customer Support',
        },
        {
          card_icon: 'public/assets/check-circle.svg',
          card_option_text: 'Free User Account',
        },
        {
          card_icon: 'public/assets/cross-circle.svg',
          card_option_text: 'Monthly Reports',
          isError: true,
        },
        {
          card_icon: 'public/assets/cross-circle.svg',
          card_option_text: 'Multiple Devices',
          isError: true,
        },
      ],
    },

    {
      card_head: 'PREMIUM PLAN',
      card_price: '$49',
      card_period: 'Per month',
      card_description:
        'Lorem ipsum dolor sit amet consectetur. Praesent amet dignissim pretium congue consectetur orci augue mi. Donec cursus lacus laoreet feugiat in fermentum sem purus.',
      card_options: [
        {
          card_icon: 'public/assets/check-circle.svg',
          card_option_text: 'Customer Support',
        },
        {
          card_icon: 'public/assets/check-circle.svg',
          card_option_text: 'Upto 10 Users',
        },
        {
          card_icon: 'public/assets/check-circle.svg',
          card_option_text: 'Monthly Reports',
        },
        {
          card_icon: 'public/assets/check-circle.svg',
          card_option_text: 'Multiple Devices Supported',
        },
      ],
    },
    {
      card_head: 'BASIC PLAN',
      card_price: '$0',
      card_period: 'Per month',
      card_description:
        'Lorem ipsum dolor sit amet consectetur. Praesent amet dignissim pretium congue consectetur orci augue mi. Donec cursus lacus laoreet feugiat in fermentum sem purus.',

      card_options: [
        {
          card_icon: 'public/assets/check-circle.svg',
          card_option_text: 'Customer Support',
        },
        {
          card_icon: 'public/assets/check-circle.svg',
          card_option_text: 'Free User Account',
        },
        {
          card_icon: 'public/assets/cross-circle.svg',
          card_option_text: 'Monthly Reports',
          isError: true,
        },
        {
          card_icon: 'public/assets/cross-circle.svg',
          card_option_text: 'Multiple Devices',
          isError: true,
        },
      ],
    },

    {
      card_head: 'PREMIUM PLAN',
      card_price: '$49',
      card_period: 'Per month',
      card_description:
        'Lorem ipsum dolor sit amet consectetur. Praesent amet dignissim pretium congue consectetur orci augue mi. Donec cursus lacus laoreet feugiat in fermentum sem purus.',
      card_options: [
        {
          card_icon: 'public/assets/check-circle.svg',
          card_option_text: 'Customer Support',
        },
        {
          card_icon: 'public/assets/check-circle.svg',
          card_option_text: 'Upto 10 Users',
        },
        {
          card_icon: 'public/assets/check-circle.svg',
          card_option_text: 'Monthly Reports',
        },
        {
          card_icon: 'public/assets/check-circle.svg',
          card_option_text: 'Multiple Devices Supported',
        },
      ],
    },
  ]

  return (
    <div className="tariff-plan" id="pricing">
      <div className="tariff-plan__block wrapper">
        <div className="tariff-plan__block--card">
          <h4 className="tariff-plan__block--card__title">Тарифи</h4>
          <p className="tariff-plan__block--card__desc">Free та Enhanced</p>
          <Swiper
            pagination={{
              clickable: true,
            }}
            slidesPerView={2}
            spaceBetween={40}
            breakpoints={{
              320: {
                spaceBetween: 20,
                slidesPerView: 1,
              },
              481: {
                slidesPerView: 'auto',
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            modules={[Pagination]}
            className="tariff-plan__swiper"
          >
            {planData.map((item, id) => (
              <SwiperSlide key={item.card_head + id}>
                <Card
                  head={item.card_head}
                  price={item.card_price}
                  period={item.card_period}
                  description={item.card_description}
                  options={item.card_options}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
