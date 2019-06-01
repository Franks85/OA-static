import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import Link from "../../UI/link/link";
import { FaPhone, FaFax, FaEnvelope, FaFile } from "react-icons/fa";
import { media } from "../../Util/StyledComponent/mediaQueryHelper";

const InfoLink = styled.div`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-weight: bolder;
  color: #fff;
  span {
    margin-left: 0.3rem;
  }
`;

const InfoBox = styled.div`
  text-align: left;
  ${media.lessThan("tablet")`
    text-align: center;
  `};
`;

const info = () => {
  return (
    <Row className="mt-3">
      <Col md={6}>
        <InfoBox>
          <InfoLink>
            <FaPhone size={14} color="#fff" />
            <span>071/793.82.39</span>
          </InfoLink>
          <InfoLink>
            <FaEnvelope size={14} color="#fff" />
            <span>
              <Link
                href="mailto:info@openappalti.it"
                color="#fff"
                hoverColor="#173ee6"
              >
                info@openappalti.it
              </Link>
            </span>
          </InfoLink>
        </InfoBox>
      </Col>
      <Col md={6}>
        <InfoBox>
          <InfoLink>
            <FaFax size={14} color="#fff" />
            <span>071/793.82.39</span>
          </InfoLink>
          <InfoLink>
            <FaFile size={14} color="#fff" />
            <span>C.F. e P.IVA: 01370630426</span>
          </InfoLink>
        </InfoBox>
      </Col>
    </Row>
  );
};

export default info;
