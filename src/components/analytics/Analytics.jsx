import React from 'react'
import analyticsImg from '../../../public/assets/img/analytics-img.png'
import './analytics.scss'

export const Analytics = () => {
  return (
    <div className="analytics">
      <div className="analytics__block wrapper">
        <div className="analytics__block--left">
          <h2 className="analytics__block--left__title">Аналітика</h2>
          <ul className="analytics__block--left__list">
            <li>
              <strong>Кількість відвідувачів: </strong>Реальні дані про
              відвідування.
            </li>
            <li>
              <strong>Популярні страви: </strong>Аналіз найбільш затребуваних
              страв.
            </li>
            <li>
              <strong>Кількість замовлень: </strong>
              Статистика замовлень.
            </li>
          </ul>
        </div>
        <div className="analytics__block--right">
          <img src={analyticsImg} alt="analytics-img" />
        </div>
      </div>
    </div>
  )
}
