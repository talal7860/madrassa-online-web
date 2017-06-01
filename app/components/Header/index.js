import React from 'react';
import {
  Button,
  Col,
  Container,
  Row,
  InputGroup,
  Input,
  Navbar,
  Nav,
  NavDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';
import Logo from 'components/Logo';
import H1 from 'components/H1';
import A from 'components/A';

export const Wrapper = styled.div `
        height:50px;
        background-color: #2c3742;
        `;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col md={5}>
              <Logo>
                <H1>
                  <A href="index.html">
                    Bootstrap Admin Theme
                  </A>
                </H1>
              </Logo>
            </Col>
            <Col md={5}>
              <Row>
                <Col lg={12}>
                  <InputGroup>
                    <Input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                      <Button color="primary">Search</Button>
                    </span>
                  </InputGroup>
                </Col>
              </Row>
            </Col>
            <Col md={2}>
              <Navbar role="banner">
                <Nav className="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
                  <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      My Account
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Profile</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Logout</DropdownItem>
                    </DropdownMenu>
                  </NavDropdown>
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}
export default Header;
