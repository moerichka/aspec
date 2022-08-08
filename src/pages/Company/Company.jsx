import React from 'react'

import {withErrorBoundary} from "react-error-boundary"

import Header from '../../components/header/Header'
import Scroller from '../../components/scroller'
import Footer from '../../components/footer/Footer'
import CompanyFull from "../../components/companyFull"
import { NoMatchPage } from "../NoMatch";

import s from "./company.module.css"

function Company() {
  return (
    <div className={s.company}>
      <Header />
      <Scroller />
      <div className={s.companyFull}>
        <CompanyFull />
      </div>
      <Footer />
    </div>
  )
}

export default withErrorBoundary(Company, {
  fallbackRender: ()=><NoMatchPage/>,
  onError(error, info){
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  }
});