import React from "react";
import { Row, Col } from "reactstrap";
import Link from "../../../../UI/link/link";

const endLinks = () => {
  return (
    <Row className='mt-5'>
      <Col md={6}>
        <p>
          Contratto Open Appalti (<Link href="/service"> Scarica </Link>)
        </p>
        <p>
          Informativa sulla privacy (<Link href="/service"> Leggi </Link>)
        </p>
      </Col>
    </Row>
  );
};

export default endLinks;
