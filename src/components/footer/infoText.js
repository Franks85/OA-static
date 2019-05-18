import React from "react";
import styled from "styled-components";
import { Col } from "reactstrap";

const Text = styled.p``;

const Icon = styled.span`
  margin: 0 0.5rem;
`;

const infoText = props => {
  const { iconName, text } = props;
  return (
    <Col>
      <Text>
        <Icon>
          <i className={iconName} />
        </Icon>
        {text}
      </Text>
    </Col>
  );
};

export default infoText;
