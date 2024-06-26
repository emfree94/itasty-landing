import React from 'react'
import przelewyImg from '../../../public/assets/img/przelewy24.png'
import mbankImg from '../../../public/assets/img/mbank.png'
import ingImg from '../../../public/assets/img/ing.png'
import payuImg from '../../../public/assets/img/payu.png'
import blinkImg from '../../../public/assets/img/blik.png'
import stripeImg from '../../../public/assets/img/stripe.png'
import tpay from '../../../public/assets/img/image442.png'
import './payments.scss'

export const Payments = () => {
  return (
    <div className="payments">
      <div className="payments__block wrapper">
        <div className="payments__block--left">
          <h2 className="payments__block--left__title">
            Інтеграція з Payment Systems
          </h2>
          <ul className="payments__block--left__list">
            <li>
              Підтримка різних платіжних систем: Przelewy24, PayU, BLIK, ING,
              mBank, Stripe, Tpay.
            </li>
          </ul>
          <p className="payments__block--left__description">
            Зручність для клієнтів: Широкий вибір методів оплати.
          </p>
        </div>

        <div className="payments__block--right">
          <div className="payments__block--right__img">
            <img src={przelewyImg} alt="image-payment" />
          </div>
          <div className="payments__block--right__img">
            <img src={payuImg} alt="image-payment" />
          </div>
          <div className="payments__block--right__img">
            <img src={mbankImg} alt="image-payment" />
          </div>
          <div className="payments__block--right__img">
            <img src={blinkImg} alt="image-payment" />
          </div>
          <div className="payments__block--right__img">
            <img src={ingImg} alt="image-payment" />
          </div>
          <div className="payments__block--right__img">
            <img src={stripeImg} alt="image-payment" />
          </div>
          <div className="payments__block--right__img">
            <img src={tpay} alt="image-payment" />
          </div>
        </div>
      </div>
    </div>
  )
}
