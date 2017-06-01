import { Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import React from 'react';

const SidebarNav = ({ children }) => {
  const style = {
    listStyle: 'none',
    padding: '0px',
    margin: '0px',
  };
  return (
    <Nav vertical style={style}>
      {children}
    </Nav>
  );
};

SidebarNav.propTypes = {
  children: PropTypes.array.isRequired,
};

export default SidebarNav;
