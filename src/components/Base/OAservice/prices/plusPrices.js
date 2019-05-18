import React from "react";
import styled from "styled-components";
import SectionHeader from "../Layout/sectionHeader";
import { tabLink, importList, learnList, helpList } from "./plusPriceData";
import List from "../../../../UI/groupList/groupList";
import "./plusPrices.css";

const Wrapper = styled.div``;



const plusPrices = () => {
  const link = tabLink.map(i => (
    <li className="nav-item" key={i.id}>
      <a
        className={i.className}
        id={i.id}
        data-toggle="tab"
        href={i.href}
        role="tab"
        aria-controls={i.ariaContr}
        aria-selected={i.ariaSel}
      >
        {i.text}
      </a>
    </li>
  ));

  return (
    <Wrapper className="mt-5">
      <SectionHeader title="Costo Servizi Aggiuntivi" subtitle="" />
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {link}
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane active p-3"
          id="import"
          role="tabpanel"
          aria-labelledby="import-tab"
        >
          <List data={importList} />
        </div>
        <div
          className="tab-pane p-3"
          id="learn"
          role="tabpanel"
          aria-labelledby="learn-tab"
        >
          <List data={learnList} />
        </div>
        <div
          className="tab-pane p-3"
          id="help"
          role="tabpanel"
          aria-labelledby="help-tab"
        >
          <List data={helpList} />
        </div>
      </div>
    </Wrapper>
  );
};

export default plusPrices;
