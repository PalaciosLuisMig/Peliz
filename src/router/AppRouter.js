import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import {  } from "../components/Home/Home";

export const AppRouter = () => {
    return(
        <BrowserRouter>
        <div>
            <Routes>
                <Route exact part = "/" element = {<Home/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
};