import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../layout/Header/Header';
import NavBar from '../NavBar/NavBar';


const Main = () => {
    return (
        <div className='main'>
            {/* <NavBar></NavBar> */}
            <Header></Header>

            <Outlet></Outlet>
        </div>
    );
};

export default Main;