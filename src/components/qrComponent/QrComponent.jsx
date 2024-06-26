import React from 'react'
import phoneImage from '../../../public/assets/img/iphone-bg.png'
import imgBackground from '../../../public/assets/vector.svg'
import './qrComponent.scss'

export const QrComponent = () => {
  return (
    <div className="qr-menu" id='qr'>
      <img
        className="qr-menu__img_bg"
        src={imgBackground}
        alt="image-background"
      />
      <div className="qr-menu__block wrapper ">
        <div className="qr-menu__block--left">
          <h2 className="qr-menu__block--left__title">QR Меню</h2>
          <ul className="qr-menu__block--left__list">
            <li>QR-стікери з NFC: Можливість додавання Wi-Fi пароля.</li>
            <li>Можливість вибору ресторану</li>
            <li>
              Можливість відображення різних меню в залежності від годин
              (Сніданок обід).
            </li>
          </ul>
          <p className="qr-menu__block--left__description">
            Сучасний підхід: Легкий доступ до меню.
          </p>
        </div>
        <div className="qr-menu__block--right">
          <img src={phoneImage} alt="image-phone" />
        </div>
      </div>
    </div>
  )
}
