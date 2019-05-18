import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import SectionHeader from "../Layout/sectionHeader";
import { feature1, feature2, technical } from "./featuresData";
import GroupList from '../../../../UI/groupList/groupList'
import Link from '../../../../UI/link/link'

const Wrapper = styled.div``;

const features = () => {
  const featureFirst = <GroupList data={feature1} />
  const featureSecond = <GroupList data={feature2} />
  const  technicals = <GroupList data={technical} />

  return (
    <Wrapper className="p-3">
      <SectionHeader
        title="Funzionalità"
        subtitle="Scropri tutti i vantaggi"
      />
      <Row className="mt-2">
        <Col lg={6}>
        <h4 className='text-center'>Frontend Fornitore</h4>
         {featureFirst}
        </Col>
        <Col lg={6}>
        <h4 className='text-center'>Backend Stazione Appaltante</h4>
          {featureSecond}
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Tutta la documentazione relativa a ciascun fornitore sarà aggiornata dal fornitore stesso e resa disponibile in un'unica interfaccia grafica di facile consultazione.</p>
          <p> Il sistema di comunicazione disponibile nel servizio "Albo Fornitori" renderà agevole tutte le comunicazioni necessarie per mantenere aggiornati i dati in esso caricati e consentirà un'agevole gestione degli inviti alle gare sia in modalità manuale che automatica per garantire il principio di rotazione, come previsto dalla normativa vigente.</p>
        </Col>
      </Row>
      <SectionHeader
        title="Caratteristiche tecniche"
      />
      <Row className="mt-2">
        <Col>
          {technicals}
        </Col>
      </Row>
      <p>Richiedi informazioni: <Link href="http://www.informaetica.it/contact">http://www.informaetica.it/contact</Link></p>
    </Wrapper>
  );
};

export default features;
