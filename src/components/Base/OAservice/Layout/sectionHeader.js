import React from "react";
import styled from 'styled-components'

const SectionHeader = styled.div`
  padding: 1rem 0;
  h2 {
    padding-bottom: 1rem;
  }
  p {
    padding-top: 1rem;
  }
`;

const Divider = styled.div`
  border-bottom: 1px solid #ccc;
  height: 1px;
  width: 60px;
  margin: auto;
`;

const sectionHeader = props => {
  const { title, subtitle } = props;
  return (
    <SectionHeader className="text-center">
      <h2>{title}</h2>
      <Divider />
      <p className="text-secondary">{subtitle}</p>
    </SectionHeader>
  );
};

export default sectionHeader;
