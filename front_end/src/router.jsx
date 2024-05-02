import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Home";
import TeamPage from "./pages/Team";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PlayersPage from "./pages/Players";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true, 
                element: <HomePage />
            },
            {
                path: "signup/",
                element: <SignUp /> 
            },
            {
                path: "login/",
                element: <Login />
            },
            {
                path: "team/",
                element: <TeamPage />
            },
            {
                path: "players/",
                element: <PlayersPage />
            }

        ]
    }
])

export default router;