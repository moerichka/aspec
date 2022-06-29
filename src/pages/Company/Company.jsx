import React from 'react'
import s from "./company.module.css"

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CompanyFull from "../../components/companyFull"

function Company() {
  return (
    <div className={s.company}>
      <Header />
      <div className={s.companyFull}>
        <CompanyFull />
      </div>
      <Footer />
    </div>
  )
}

export default Company