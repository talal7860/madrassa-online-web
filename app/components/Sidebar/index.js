import React from 'react';
import {Nav, NavItem, NavLink, Col} from 'reactstrap';
import SidebarNav from 'components/SidebarNav';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
require('font-awesome/css/font-awesome.css');

const SidebarCB = styled.div `
      margin-bottom:30px;
      background:#fff;
      border-radius:10px;
      padding:10px;
      border-left:1px solid #eee;
      border-top:1px solid #eee;
      border-right:2px solid #eee;
      border-bottom:2px solid #eee;
      display: block;
`;

const Sidebar = () => (
    <Col md={2}>
      <SidebarCB>
        <SidebarNav>
          <NavItem className="current">
            <NavLink className="fa fa-home" href="#">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="fa fa-calendar-check-o" href="#">Calendar</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="fa fa-address-book" href="#">Statistics</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="fa fa-table" href="#">
              Table</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="fa fa-briefcase" href="#">Buttons</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="fa fa-pencil-square-o" href="#">Editors</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="fa fa-tasks" href="#">Forms</NavLink>
          </NavItem>
        </SidebarNav>
      </SidebarCB>
    </Col>

);

export default Sidebar;
