import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Favorites from "../pages/Favorites";

import Private from "./Private";
import Details from "../pages/MovieDetails";

export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>

            <Route
            path="/dashboard/"
            element={
                <Private>
                    <Dashboard />
                </Private>
            }/>
            
            <Route
            path="/favorites"
            element={
                <Private>
                    <Favorites/>
                </Private>
            }/>

            <Route
            path="/details/:id"
            element={
                <Private>
                    <Details/>
                </Private>
            }
            />
        </Routes>


    )
}