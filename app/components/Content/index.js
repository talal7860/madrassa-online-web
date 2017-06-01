import React from 'react';
import {Col} from 'reactstrap';
import styled from 'styled-components';

const ContentLargeBox = styled.div `
     margin-bottom:30px;
     background:#fff;
     border-radius:10px;
     padding:10px;
     border-left:1px solid #eee;
     border-top:1px solid #eee;
     border-right:2px solid #eee;
     border-bottom:2px solid #eee;
  `;

const PanelHeading = styled.div `
     float: left;
    padding: 10px 15px;
    padding-top: 0px;
  `;

const PanelTitle = styled.div `
     float: left;
    padding: 10px 15px;
    padding-top: 0px;
  `;

const PanelBody = styled.div `
    clear:both;
  `;

class Content extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Col md={12}>
        <ContentLargeBox>
          <PanelHeading>
            <PanelTitle>
              New vs Returning Visitors
            </PanelTitle>
          </PanelHeading>
          <PanelBody>
            Ut tristique adipiscing mauris, sit amet suscipit metus porta quis. Donec dictum tincidunt erat, eu blandit ligula. Nam sit amet dolor sapien. Quisque velit erat, congue sed suscipit vel, feugiat sit amet enim. Suspendisse interdum enim at mi tempor commodo. Sed tincidunt sed tortor eu scelerisque. Donec luctus malesuada vulputate. Nunc vel auctor metus, vel adipiscing odio. Aliquam aliquet rhoncus libero, at varius nisi pulvinar nec. Aliquam erat volutpat. Donec ut neque mi. Praesent enim nisl, bibendum vitae ante et, placerat pharetra magna. Donec facilisis nisl turpis, eget facilisis turpis semper non. Maecenas luctus ligula tincidunt iasdsd vitae ante et,
            <br/><br/>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sed consectetur erat. Maecenas in elementum libero. Sed consequat pellentesque ultricies. Ut laoreet vehicula nisl sed placerat. Duis posuere lectus n, eros et hendrerit pellentesque, ante magna condimentum sapien, eget ultrices eros libero non orci. Etiam varius diam lectus.
          </PanelBody>
        </ContentLargeBox>
      </Col>
    );
  }
}

export default Content;
