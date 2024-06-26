import React from 'react'
import { Hero } from '../hero/Hero'
import { EcoMenu } from '../ecoMenu/EcoMenu'
import { Payments } from '../payments/Payments'
import { Instruction } from '../instruction/Instruction'
import { Tip } from '../infoAboutTip/Tip'
import { AnimationLine } from '../animationLine/AnimationLine'
import { Reviews } from '../reviews/Reviews'
import { Trust } from '../trust/Trust'
import { Analytics } from '../analytics/Analytics'
import { FAQ } from '../faq/FAQ'
import { TariffPlan } from '../tariffPlan/TariffPlan'
import { ContactUs } from '../contactUs/ContactUs'
import { QrComponent } from '../qrComponent/QrComponent'

export const Main = () => {
  return (
    <main>
      <Hero />
      <EcoMenu />
      <Payments />
      <Instruction />
      <Tip />
      <AnimationLine />
      <Reviews />
      <Trust />
      <QrComponent />
      <TariffPlan />
      <Analytics />
      <FAQ />
      <ContactUs />
    </main>
  )
}
