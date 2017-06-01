/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';


const A = styled.a`
  color:#fff;
  font-family: 'Open Sans Condensed', sans-serif;
  text-decoration:none;


  &:hover {
  	text-decoration:none;
    color: #fff;
  }
`;

export default A;
