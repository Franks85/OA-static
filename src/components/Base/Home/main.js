import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import whatOp from "../../../Util/img/what_openappalti.jpg";
import { media } from "../../../Util/StyledComponent/mediaQueryHelper";

const WhatImgBox = styled.div`
  background: url('${props => props.bgUrl}') no-repeat left/contain;
  height: 20rem;
  overflow: hidden;
  margin-top: 2rem;
  ${media.lessThan("phone")`
      margin-top: .5rem;
      height: 12rem;
    `};
`;

const main = () => {
  return (
    <Container>
      <Row>
        <Col>
          <WhatImgBox bgUrl={whatOp} />
        </Col>
      </Row>
    </Container>
  );
};

export default main;
