import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../View/Home/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout children={<Home/>}/>}/>
        </Routes>
    );
};

export default AppRoutes;