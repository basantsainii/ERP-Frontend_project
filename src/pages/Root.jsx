import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layouts/components/Header'
import SideMenu from '../layouts/components/SideMenu'
import Main from '../layouts/components/Main'


function Root() {
  return (
    <>
    <Header />
    <div className=' flex h-[96%] gap-1'>
        <SideMenu />
        <Main>
            <Outlet />
        </Main>
    </div>
    </>
  );
};

export default Root