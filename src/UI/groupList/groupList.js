import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

const Icon = styled.i`
  path {
    fill: var(--cp);
  }
`;

const Text = styled.span`
  margin-left: 0.5rem;
`;

const groupList = props => {
  const { data } = props;
  const el = data.map(i => (
    <li key={i.text} className='p-1'>
      <Icon className="fas fa-check" />
      <Text>{i.text}</Text>
    </li>
  ));
  return <List>{el}</List>;
};

export default groupList;
