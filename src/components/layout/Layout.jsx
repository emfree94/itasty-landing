import React from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { ArrowButton } from '../buttons/arrowButton/ArrowButton'

export const Layout = ({ children, scrollToContactUs }) => {
  return (
    <>
      <Header scrollToContactUs={scrollToContactUs} />
      {children}
      <Footer />
      <ArrowButton />
    </>
  )
}
