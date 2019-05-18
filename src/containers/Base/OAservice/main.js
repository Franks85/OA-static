import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Intro from '../../../components/Base/OAservice/intro/intro'
import Features from '../../../components/Base/OAservice/features/features'
import Prices from '../../../components/Base/OAservice/prices/prices'
import PlusPrices from '../../../components/Base/OAservice/prices/plusPrices'
import EndLinks from '../../../components/Base/OAservice/endLinks/endLinks'

class OAservice extends Component {
render () {
  return (
    <Container>
        <Intro />
        <Features />
        <Prices />
        <PlusPrices />
        <hr className="my-4" />
        <EndLinks />
    </Container>
   )
  }
 }

export default OAservice