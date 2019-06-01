import React from "react";
import styled from "styled-components";
import { Col } from "reactstrap";
import Link from "../../UI/link/link";
import { navConfig } from "./navConfig";
import { media } from "../../Util/StyledComponent/mediaQueryHelper";

const NavItem = styled.div`
  font-size: 1.1rem;
  letter-spacing: 0.15rem;
  margin: 0.25rem 0;
  font-weight: bolder;
  width: 100%;

  a {
    display: inline-block;
    padding: 0.5rem;
    border-radius: 3px;
    &:hover {
      border-color: transparent;
      background: #fff;
    }
  }
`;

const NavBox = styled.div`
  ${media.lessThan("tablet")`
    display: none;
  `};
`;

const navigation = () => {
  const navList = navConfig.map(i => (
    <NavItem>
      <Link href={i.href} color="#fff" hoverColor="#156ee0">
        {i.text}
      </Link>
    </NavItem>
  ));
  return (
    <Col md={4} className="text-center">
      <NavBox>
      {navList}
      </NavBox>
    </Col>
  );
};

export default navigation;
