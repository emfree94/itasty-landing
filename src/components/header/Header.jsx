import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import MenuIcon from '../../assets/jam_menu.svg'
import CloseIcon from '../../assets/jam_close.svg'
import './header.scss'
import { Language } from '../language/Language'
import { useTranslation } from 'react-i18next'
import { handleAnchorClick } from '../../helpers/anchorClick'
import { Button } from '../buttons/button/Button'

const linksData = [
  { name: 'qr', href: '#qr' },
  { name: 'pricing', href: '#pricing' },
  { name: 'aboutUs', href: '#about-us' },
  { name: 'contactUs', href: '#contact-us' },
]

export const Header = ({ hiddenBackground, scrollToContactUs }) => {
  const { t } = useTranslation()
  const [showLangList, setShowLangList] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const languages = ['EN', 'PL', 'UKR']

  return (
    <header className={`header ${hiddenBackground ? 'hidden' : ''}`}>
      <div className="header__wrapper wrapper">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <img
          onClick={() => setShowMenu(!showMenu)}
          className="header__wrapper--menu"
          src={MenuIcon}
          alt="hamburger-icon"
        />
        <div className="header__wrapper--block">
          <div className="header__wrapper--block__links">
            <ul>
              {linksData.map(({ name, href }) => (
                <li key={name}>
                  <a href={href} onClick={(e) => handleAnchorClick(e, href)}>
                    {t(`header.${name}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Language
            showLangList={showLangList}
            setShowLangList={setShowLangList}
            languages={languages}
          />
        </div>

        <Button
          text={t('button.getItNow')}
          size="sm"
          handleClick={scrollToContactUs}
        />
      </div>

      <div className={`mobile-menu ${showMenu && 'active'}`}>
        <div className="mobile-menu__head">
          <Language
            showLangList={showLangList}
            setShowLangList={setShowLangList}
            languages={languages}
          />
          <img
            src={CloseIcon}
            alt="close-menu"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <ul className="mobile-menu__list">
          {linksData.map(({ name, href }) => (
            <li key={name}>
              <a href={href} onClick={(e) => handleAnchorClick(e, href)}>
                {t(`header.${name}`)}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__wrapper">
          <Button text="Get it now" size="sm" handleClick={scrollToContactUs} />
        </div>
      </div>
    </header>
  )
}
