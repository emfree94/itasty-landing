import React from 'react'
import './reviews.scss'

const reviewsData = [
  {
    id: 1,
    initials: 'Yaroslav',
    feedback:
      'Текст відгуку текст відгуку текст відгуку текст відгуку текст відгуку текст текст відгуку текст відгуку текст',
  },
  {
    id: 2,
    initials: 'Ruslan',
    feedback:
      'Текст відгуку текст відгуку текст відгуку текст відгуку текст відгуку текст відгуку текст  тек відгуку текст відгуку текст відгуку текст відгуку текст відгуку текст відгуку текст відгуку текст відгуку',
  },
]

export const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews__block wrapper">
        <div className="reviews__block--left">
          <h2 className="reviews__block--left__title">Відгуки</h2>
          <ul className="reviews__block--left__list">
            <li>
              Інтеграція з соціальними мережами: Можливість інтегрувати відгуки
              з Google, Instagram.
            </li>
          </ul>
          <p className="reviews__block--left__description">
            Підвищення довіри: Реальні відгуки від клієнтів.
          </p>
        </div>
        <div className="reviews__block--right">
          {reviewsData.map(({ id, feedback, initials }) => (
            <div key={id} className="reviews__block--right__feedback">
              <div className="reviews__block--right__feedback--head">
                <p className="reviews__block--right__feedback--head__circle_block">
                  {initials.charAt(0)}
                </p>
                <h5 className="reviews__block--right__feedback--head__initials">
                  {initials}
                </h5>
              </div>
              <p className="reviews__block--right__feedback--text">
                {feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
