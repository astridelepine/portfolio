import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "../Component/HomePage";
import Competence from "../Component/Competence";
import Passion from "../Component/Passion";
import Projet from "../Component/Projet";
import Info from "../Component/Infos"
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage />   
        },
        {
            path: "/projets",
            element: <Projet/>
        },
        {
            path: "/passions",
            element: <Passion/>
        },
        {
            path: "/competences",
            element: <Competence/>
        },
        {
            path: "/infos",
            element: <Info/>
        }
    ]
)

export default router