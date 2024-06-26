import React from 'react'
import logo from '/assets/logo.svg'
import './footer.scss'
import { Button } from '../buttons/button/Button'
import { handleAnchorClick } from '../../helpers/anchorClick'

const linksData = [
  { name: 'QR', href: '#qr' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About Us', href: '#about-us' },
  { name: 'Contact us', href: '#contact-us' },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__links--logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__links--wrapper">
          <ul>
            {linksData.map(({ name, href }) => (
              <li key={name}>
                <a onClick={(e) => handleAnchorClick(e, href)}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
        <Button text="Get it now" size="sm" />
      </div>
      <p className="footer__rights">2024 All Rights Reserved iTasty.</p>
    </footer>
  )
}
