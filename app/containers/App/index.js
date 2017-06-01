/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import Content from 'components/Content';
import withProgressBar from 'components/ProgressBar';
import {Row, Col} from 'reactstrap';

const AppWrapper = styled.div `
      width:100%;
    

`;

const PageContent = styled.div `

   margin-bottom:30px;
   background:#fff;
   border-radius:10px;
   padding:10px;
   border-left:1px solid #eee;
   border-top:1px solid #eee;
   border-right:2px solid #eee;
   border-bottom:2px solid #eee;

`;
export function App(props) {
  return (
    <AppWrapper>
      <Header/>
      <PageContent>
        <Row>
          <Sidebar/>
          <Col md={10}>
            <Row>
              <Content/>
            </Row>
          </Col>
        </Row>
      </PageContent>
      <Footer/>
    </AppWrapper>
  );
}

export default withProgressBar(App);
