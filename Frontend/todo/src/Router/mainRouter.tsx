import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layoutholder/Layout";
import HomeScreen from "../pages/HomeScreen";
import React from "react";


export const mainApp = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            }
        ]
    }
])