// src/Layout/UserLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from "../Components/User/FixedComponents/NavBar/NavBar";
import Footer from "../Components/User/FixedComponents/Footer/Footer";

function UserLayout() {

    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default UserLayout;
