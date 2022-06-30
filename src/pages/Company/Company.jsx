import React from 'react'
import s from "./company.module.css"
import {withErrorBoundary} from "react-error-boundary"

import Header from '../../components/header/Header'
import Scroller from '../../components/scroller'
import Footer from '../../components/footer/Footer'
import CompanyFull from "../../components/companyFull"
import { NoMatch404 } from "../NoMatch";

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
  fallbackRender: ()=><NoMatch404/>,
  onError(error, info){
    console.log(error);
    console.log(info);
  }
});