import React from 'react'
import iphoneImage from '/assets/img/iphone.png'
import responsiveImage from '/assets/img/popular-item.png'
import './tip.scss'

export const Tip = () => {
  return (
    <div className="tip">
      <div className="tip__block wrapper">
        <div className="tip__block--left">
          <picture>
            <source media="(max-width:1024px )" srcSet={responsiveImage} />
            <img src={iphoneImage} alt="iphone-image" />
          </picture>
        </div>
        <div className="tip__block--right">
          <div className="tip__block--right__info">
            <h2 className="tip__block--right__info--title">
              Резервування Столика
            </h2>
            <ul className="tip__block--right__info--list">
              <li>
                Преавторизована сума за резервацію: Можливість додавання
                забезпечувальної суми.
              </li>
            </ul>
          </div>

          <div className="tip__block--right__info">
            <h2 className="tip__block--right__info--title">Smart Чайові</h2>
            <ul className="tip__block--right__info--list">
              <li>Поділ чайових: Між групою офіціантів та кухнею.</li>
              <li>Прив’язка столиків: До конкретних офіціантів.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
