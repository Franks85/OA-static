import React from "react";
import styled from "styled-components";
import { Col } from "reactstrap";

const Link = styled.a`
  &:hover {
    text-decoration: none;
    color: var(--c_sec);
  }
`;

const Icon = styled.span`
  margin: 0 0.5rem;
`;

const infoLink = props => {
  const { href, text, iconName, icon } = props;
  return (
    <Col>
      <Link href={href}>
        {icon && (
          <Icon>
            <i className={iconName} />
          </Icon>
        )}
        {text}
      </Link>
    </Col>
  );
};

export default infoLink;
