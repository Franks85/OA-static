import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "../../UI/link/link";
import logo from "../../Util/img/logo.png";

const SocialBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SociaLink = styled.div`
  flex: 1;
  a {
    display: inline-block;
    padding: 0.5rem;
    border-radius: 3px;
    &:hover {
      border-color: transparent;
      background: #fff;
    }
  }
`;

const Logo = styled.div`
  background: url('${props => props.bgUrl}') no-repeat center/contain;
  height: 3rem;
`;

const social = () => {
  return (
    <Row>
      <Col md={6} className="text-center">
        <SocialBox>
          <SociaLink>
            <Link href="/" color="#fff" hoverColor="#156ee0">
              <FaFacebookF size={28} />{" "}
            </Link>
          </SociaLink>
          <SociaLink>
            <Link href="/" color="#fff" hoverColor="#156ee0">
              <FaTwitter size={28} />{" "}
            </Link>
          </SociaLink>
          <SociaLink>
            <Link href="/" color="#fff" hoverColor="#156ee0">
              <FaLinkedinIn size={28} />{" "}
            </Link>
          </SociaLink>
          <SociaLink>
            <Link href="/" color="#fff" hoverColor="#156ee0">
              <FaGithub size={28} />{" "}
            </Link>
          </SociaLink>
        </SocialBox>
      </Col>
      <Col md={6} className="mt-1">
        <Link
          href="http://www.informaetica.it"
          target="_blank"
          color="#fff"
          hoverColor="#156ee0"
        >
          <Logo bgUrl={logo} />
        </Link>
      </Col>
    </Row>
  );
};

export default social;
