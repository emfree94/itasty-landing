import React from 'react'
import './arrowButton.scss'
import ArrowImg from '../../../assets/ei_arrow-up.svg'
import { handleAnchorClick } from '../../../helpers/anchorClick'

export const ArrowButton = () => {
  return (
    <button
      className="arrow-button"
      onClick={(e) => handleAnchorClick(e, '#about-us')}
    >
      <img src={ArrowImg} alt="button-arrow" />
    </button>
  )
}
