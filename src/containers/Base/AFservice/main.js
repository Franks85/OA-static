import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Intro from '../../../components/Base/AFservice/intro/intro'
import Features from '../../../components/Base/AFservice/features/features'

class OAservice extends Component {
render () {
  return (
    <Container>
        <Intro />
        <Features />
    </Container>
   )
  }
 }

export default OAservice