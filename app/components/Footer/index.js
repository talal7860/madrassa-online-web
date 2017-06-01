import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';

export const FooterStyle = styled.div `

   background-color:#2c3742;
   box-shadow:inset 0px 0px 3px #111;
   font-size:14px;
   line-height:25px;
   padding:10px 0px 10px 0px;
   bottom: 0px;

    `;

class Footer extends React.Component {
  render() {
    return (
      <FooterStyle>
        <Container>
          <div className="copy text-center">
            <a href="#">Copyright 2014 Website</a>
          </div>
        </Container>
      </FooterStyle>
    );
  }
}

export default Footer;
