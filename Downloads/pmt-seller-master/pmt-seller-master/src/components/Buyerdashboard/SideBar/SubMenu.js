import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #0674bb;
  padding-left: 3rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  // &:hover {
  //   background: #632ce4;
  //   cursor: pointer;
  // }
`;

const SubMenu = ({ item, showSidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link to={item.path} onClick={item.subNav ? showSubnav : showSidebar } className="flex text-white focus:text-white  hover:text-white justify-between items-center px-5 py-3 no-underline font-bold text-base">
        <div className='flex items-center'>
          <img src={process.env.PUBLIC_URL + item.icon} />

          <SidebarLabel className='focus:text-white text-white'>{item.title}</SidebarLabel>
        </div>
        <div>
          {
            item.subNav && subnav
              ? item.iconOpened
              : item.subNav
                ? item.iconClosed
                : null
          }
        </div>
      </Link>
      
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} onClick={showSidebar}>
              {item.icon}
              <SidebarLabel className='focus:text-white text-white font-normal'>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
