import React from 'react'
import PrzelewyImg from '../../assets/img/przelewy24.png'
import MbankImg from '../../assets/img/mbank.png'
import IngImg from '../../assets/img/ing.png'
import PayuImg from '../../assets/img/payu.png'
import BlinkImg from '../../assets/img/blik.png'
import StripeImg from '../../assets/img/stripe.png'
import Tpay from '../../assets/img/image442.png'
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
            <img src={PrzelewyImg} alt="image-payment" />
          </div>
          <div className="payments__block--right__img">
            <img src={PayuImg} alt="image-payment" />
          </div>
          <div className="payments__block--right__img">
            <img src={MbankImg} alt="image-payment" />
          </div>
          <div className="payments__block--right__img">
            <img src={BlinkImg} alt="image-payment" />
          </div>
          <div className="payments__block--right__img">
            <img src={IngImg} alt="image-payment" />
          </div>
          <div className="payments__block--right__img">
            <img src={StripeImg} alt="image-payment" />
          </div>
          <div className="payments__block--right__img">
            <img src={Tpay} alt="image-payment" />
          </div>
        </div>
      </div>
    </div>
  )
}
