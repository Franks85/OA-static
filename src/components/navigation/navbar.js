import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import {
  baseNavLinkLeft,
  baseNavLinkRight
} from "./navLinkConfig";

export default class Navigation extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const baseNavLeft = baseNavLinkLeft.map(i => {
      return (
        <LinkContainer to={i.href} key={i.title}>
          <NavItem >
            <NavLink href={i.href}>{i.title}</NavLink>
          </NavItem>
        </LinkContainer>
      );
    });
    const baseNavRight = baseNavLinkRight.map(i => {
      return (
        <LinkContainer to={i.href} key={i.title}>
          <NavItem className="nav-link-right" >
            <NavLink href={i.href}>{i.title}</NavLink>
          </NavItem>
        </LinkContainer>
      );
    });
    
    const { rightLink } = this.props;
    return (
      <div style={{ marginTop: ".7rem" }}>
        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              {baseNavLeft}
            </Nav>
          </Collapse>
          {rightLink && baseNavRight}
        </Navbar>
      </div>
    );
  }
}
