import React, { useState } from 'react'
import buttonImg from '../../assets/sketchLogo.svg'
import './card.scss'

export const Card = ({ head, price, period, description, options }) => {
  const [buttonText, setButtonText] = useState('Join for free')

  const handleMouseEnter = () => {
    setButtonText('Get the premium!')
  }

  const handleMouseLeave = () => {
    setButtonText('Join for free')
  }

  return (
    <div
      className="card "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="card__head">{head}</p>
      <div className="card__price_block">
        <h5 className="card__price_block--price">{price}</h5>
        <p className="card__price_block--period">{period}</p>
      </div>
      <p className="card__description">{description}</p>
      <div className="card__line" />
      <div className="card__wrapper">
        {options?.map(({ card_icon, card_option_text, isError }, id) => (
          <React.Fragment key={id + card_option_text}>
            <div className="card__wrapper--options">
              <img
                src={card_icon}
                alt="icon-check"
                className={`option-image ${isError && 'error'}`}
              />
              <p className="card__wrapper--options__desc">{card_option_text}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
      <button className="card__button">
        {buttonText === 'Get the premium!' && (
          <img src={buttonImg} alt="Premium logo" className="card__button--img" />
        )}
        {buttonText}
      </button>
    </div>
  )
}
