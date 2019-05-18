import React, { Fragment } from "react";
import Layout from "./Layout/layout";
import { info, logo } from './OAinfoConfig';
import styled from "styled-components";
import Link from '../../../UI/link/link'
import {media} from '../../../Util/StyledComponent/mediaQueryHelper'

const LogoBox = styled.div`
  background: url('${props => props.bgUrl}') no-repeat left/contain;
  height: 10rem;
  width: 25rem;
  ${media.lessThan("tablet")`
      width: 15rem;
      margin: 0 auto;
    `};
`;

const OaInfo = () => {
  const infoBox = (
    <Fragment>
      <h2>{info.title}</h2>
      <p>
      <Link href={info.site}>{info.site}</Link>
      </p>
      <p>{info.owner}</p>
      <p>{info.address}</p>
      <p><span>Tel:</span>{info.tel}</p>
      <br />
      <p>Albo Nazionale Cooperative:</p>
      <p>{info.albo}</p>
      <br />
      <p><span>Codice Fiscale e Partita IVA:</span>{info.pIva}</p>
      <span>
        <Link href={info.emailHref}>{info.email}</Link>
      </span>
    </Fragment>
  );
  const logoImg = <LogoBox bgUrl={logo} />;
  return <Layout info={infoBox} logo={logoImg} />;
};

export default OaInfo;
