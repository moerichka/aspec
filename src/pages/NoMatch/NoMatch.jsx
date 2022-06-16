import React from 'react'
import s from "./noMatch.module.css"

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


function NoMatch() {
  return (
    <div className={s.noMatch}>
      <Header />
      <div>404</div>
      <Footer />
    </div>
  )
}

export default NoMatch