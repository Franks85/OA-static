import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import SectionHeader from "../Layout/sectionHeader";
import { feature1, feature2 } from "./featuresData";
import GroupList from '../../../../UI/groupList/groupList'

const Wrapper = styled.div``;

const features = () => {
  const featureFirst = <GroupList data={feature1} />
  const featureSecond = <GroupList data={feature2} />

  return (
    <Wrapper className="p-3">
      <SectionHeader
        title="Caratteristiche Tecniche"
        subtitle="Scropri tutte le funzionalità"
      />
      <Row className="mt-2">
        <Col lg={6}>
         {featureFirst}
        </Col>
        <Col lg={6}>
          {featureSecond}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default features;
