import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";
import OAlogo from "../../Util/img/openappalti-logo.png";

const Logo = styled.div`
    background: url('${props => props.bgUrl}') no-repeat left/contain;
    height: 6rem;
`;

const headerTop = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="4" lg="4">
          <a href="/">
            <Logo bgUrl={OAlogo} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default headerTop;
