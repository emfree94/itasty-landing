import React from 'react'
import iphoneImg from '../../../public/assets/img/iPhone-image.png'
import './ecoMenu.scss'

export const EcoMenu = () => {
  return (
    <div className="eco-menu">
      <div className="eco-menu__block wrapper">
        <div className="eco-menu__block--left">
          <h2 className="eco-menu__block--left__title">Еко Меню</h2>
          <ul className="eco-menu__block--left__list">
            <li>
              Економія на друці меню: Зменшення витрат на друк та передрук меню.
            </li>
            <li>
              Екологічні переваги: Відсутність необхідності утилізації
              використаного паперу.
            </li>
          </ul>
        </div>
        <div className="eco-menu__block--right">
          <img src={iphoneImg} alt='phone-image'/>
        </div>
      </div>
    </div>
  )
}
