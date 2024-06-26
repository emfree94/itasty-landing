import React, { useEffect, useState } from 'react'
import logo from '/assets/logo.svg'
import menuIcon from '/assets/jam_menu.svg'
import closeIcon from '/assets/jam_close.svg'
import './header.scss'
import { Language } from '../language/Language'
import { useTranslation } from 'react-i18next'
import { handleAnchorClick } from '../../helpers/anchorClick'
import { Button } from '../buttons/button/Button'
import { scrollToContactUs } from '../../helpers/scrollToContactUs'

const linksData = [
  { name: 'qr', href: '#qr' },
  { name: 'pricing', href: '#pricing' },
  { name: 'aboutUs', href: '#about-us' },
  { name: 'contactUs', href: '#contact-us' },
]

export const Header = ({ hiddenBackground }) => {
  const { t } = useTranslation()
  const [showLangList, setShowLangList] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const languages = ['EN', 'PL', 'UKR']

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [showMenu])

  const handleMobileLinkClick = (e, href) => {
    handleAnchorClick(e, href)
    setTimeout(() => {
      setShowMenu(false)
    }, 1000)
  }

  const handleButtonClick = () => {
    scrollToContactUs()
    setTimeout(() => {
      setShowMenu(false)
    }, 1000)
  }

  return (
    <header className={`header ${hiddenBackground ? 'hidden' : ''}`}>
      <div className="header__wrapper wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <img
          onClick={() => setShowMenu(!showMenu)}
          className="header__wrapper--menu"
          src={menuIcon}
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
            src={closeIcon}
            alt="close-menu"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <ul className="mobile-menu__list">
          {linksData.map(({ name, href }) => (
            <li key={name}>
              <a href={href} onClick={(e) => handleMobileLinkClick(e, href)}>
                {t(`header.${name}`)}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__wrapper">
          <Button text="Get it now" size="sm" handleClick={handleButtonClick} />
        </div>
      </div>
    </header>
  )
}
