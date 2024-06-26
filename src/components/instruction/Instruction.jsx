import React from 'react'
import './instruction.scss'
import registration from '/assets/regist.svg'
import iconMenu from '/assets/icon-menu.svg'
import qrIcon from '/assets/qr.svg'
import frame from '/assets/img/group2.png'

export const Instruction = () => {
  return (
    <div className="instruction">
      <div className="instruction__block wrapper">
        <h2 className="instruction__block--title">Це просто</h2>

        <div className="instruction__block--wrapper-step">
          <div className="instruction__block--wrapper-step__step">
            <img src={registration} alt="registration-icon" />
            <div className="instruction__block--wrapper-step__step--line">
              <div className="instruction__block--wrapper-step__step--line__dot" />
              <div className="instruction__block--wrapper-step__step--line__arrow" />
            </div>
            <h5 className="instruction__block--wrapper-step__step--subtitle">
              зареєструйтесь
            </h5>
            <p className="instruction__block--wrapper-step__step--description">
              перші 14 днів використання системи повністю безкоштовні
            </p>
          </div>

          <div className="instruction__block--wrapper-step__step">
            <img src={iconMenu} alt="registration-icon" />
            <div className="instruction__block--wrapper-step__step--line">
              <div className="instruction__block--wrapper-step__step--line__dot" />
              <div className="instruction__block--wrapper-step__step--line__arrow" />
            </div>
            <h5 className="instruction__block--wrapper-step__step--subtitle">
              заповніть меню
            </h5>
            <p className="instruction__block--wrapper-step__step--description">
              створіть позиції, завантажте фотографії та напишіть опис
            </p>
          </div>

          <div className="instruction__block--wrapper-step__step">
            <img src={frame} alt="registration-icon" />
            <div className="instruction__block--wrapper-step__step--line">
              <div className="instruction__block--wrapper-step__step--line__dot" />
              <div className="instruction__block--wrapper-step__step--line__arrow" />
            </div>
            <h5 className="instruction__block--wrapper-step__step--subtitle">
              налаштуйте
            </h5>
            <p className="instruction__block--wrapper-step__step--description">
              завантажте свій логотип та вкажіть назву закладу
            </p>
          </div>

          <div className="instruction__block--wrapper-step__step">
            <img src={qrIcon} alt="registration-icon" />
            <div className="instruction__block--wrapper-step__step--line">
              <div className="instruction__block--wrapper-step__step--line__dot" />
              <div className="instruction__block--wrapper-step__step--line__arrow" />
            </div>
            <h5 className="instruction__block--wrapper-step__step--subtitle">
              меню готове
            </h5>
            <p className="instruction__block--wrapper-step__step--description">
              Ми роздрукуємо QR-код і відправимо вам щоб ви розмістили його на
              столиках
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
