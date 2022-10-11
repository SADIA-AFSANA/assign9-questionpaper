import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';


const Main = () => {
    return (
        <div className='main'>
            <NavBar></NavBar>


            <Outlet></Outlet>
        </div>
    );
};

export default Main;