import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "../pages/home/Home"
import { Error404 } from "../pages/error404/Error404";

export const AppRouter = () => {
    return(
        <BrowserRouter>
        <div>
            <Routes>
                <Route exact path= "/" element = {<Home/>}/>
                <Route path="*" element = {<Error404/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
};