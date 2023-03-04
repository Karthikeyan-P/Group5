import { Outlet } from "react-router-dom";
import React from 'react';
import '../App.css';
import Navigationbar from "../components/NavigationBar";

const HomePage = () => {
    return <>
    <Navigationbar/>

        <Outlet/>
         </>
};

export default HomePage;