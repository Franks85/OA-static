import React from "react";
import styled from "styled-components";
import { Row } from "reactstrap";
import SectionHeader from "../Layout/sectionHeader";
import PriceBox from "../Layout/priceBox";
import { priceInfo } from "./priceData";
import Link from '../../../../UI/link/link'

const Wrapper = styled.div``;

const prices = () => {
  const priceOption = priceInfo.map(i => (
    <PriceBox
      key={i.id}
      border={i.border}
      option={i.option}
      target={i.target}
      price={i.price}
    />
  ));
  return (
    <Wrapper>
      <SectionHeader
        title="Costo Servizi"
        subtitle="Scegli l'opzione giusta per te"
      />
      <Row>{priceOption}</Row>
      <p>
        *Speciali condizioni sono applicate a gruppi di Stazioni Appaltanti, per
        info:
        <Link href="mailto:contratti@openappalti.it"> contratti@openappalti.it</Link>
      </p>
    </Wrapper>
  );
};

export default prices;
