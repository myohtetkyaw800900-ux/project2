import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Nav.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const MainLayOut = () => {
    return (
        <>

            <Navbar />
            <Outlet />
            <ToastContainer />

        </>
    )
}

export default MainLayOut