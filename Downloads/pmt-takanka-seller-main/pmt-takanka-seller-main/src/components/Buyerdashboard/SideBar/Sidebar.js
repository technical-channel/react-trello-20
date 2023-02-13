import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { SidebarContext } from "../../../Provider/SidebarProvider";


const Nav = styled.div`
  background: #0674bb;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #0674bb;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const { showSidebar, sidebar } = useContext(SidebarContext)
  const navigate = useNavigate()
  
  return (
    <>
      <div className="lg:hidden block z-[1000]">
        <IconContext.Provider value={{ color: '#fff' }}>
          <SidebarNav sidebar={sidebar}>
            <>
              <SidebarWrap>
                <div className='block lg:hidden'>
                  <NavIcon to='#'>
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                  </NavIcon>
                </div>
                <div className='py-5 flex justify-center'>
                  <span onClick={() => navigate("/dashboard")}>
                    <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} className="w-full mx-auto py-5" />
                  </span>
                </div>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} showSidebar={showSidebar} />;
                })}
              </SidebarWrap>
            </>
          </SidebarNav>
        </IconContext.Provider>
      </div>

      <div className="lg:block hidden">
        <IconContext.Provider value={{ color: '#fff' }}>
          <SidebarNav sidebar={true}>
            <>
              <SidebarWrap>
                <div className='block lg:hidden'>
                  <NavIcon to='#'>
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                  </NavIcon>
                </div>
                <div className='py-5 flex justify-center'>
                  <span>
                    <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} className="w-full mx-auto py-5" />
                  </span>
                </div>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} showSidebar={showSidebar} />;
                })}
              </SidebarWrap>
            </>
          </SidebarNav>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Sidebar;
