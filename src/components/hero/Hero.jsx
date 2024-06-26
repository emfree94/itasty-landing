import React from 'react'
import logo from '../../../public/assets/logo2.svg'
import './hero.scss'
import { Button } from '../buttons/button/Button'
import { scrollToContactUs } from '../../helpers/scrollToContactUs'

export const Hero = () => {
  return (
    <div className="hero" id="about-us">
      <div className="hero__logo">
        <img src={logo} alt="logo" />
      </div>
      <p className="hero__text">for your restaurant</p>
      <h1 className="hero__title">
        <strong>iTasty:</strong>
        restaurants in your{' '}
        <span className="hero__title--frame">
          mobile
          <span className="dot left"></span>
          <span className="dot right"></span>
          <span className="dot bottom-right"></span>
          <span className="dot bottom-left"></span>
        </span>
      </h1>
      <p className="hero__description">
        Lorem ipsum dolor sit amet consectetur. Praesent amet dignissim pretium
        congue consectetur orci augue mi. Donec cursus lacus laoreet feugiat in
        fermentum sem purus.
      </p>
      <div className="hero__buttons">
        <Button
          text="Get it now"
          marginRight={'20px'}
          handleClick={scrollToContactUs}
        />
        <Button
          text="Contact us"
          type="secondary"
          handleClick={scrollToContactUs}
        />
      </div>
    </div>
  )
}
