import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Home";
import TeamPage from "./pages/Team";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PlayersPage from "./pages/Players";
import StaffPage from "./pages/Staff";
import TeamSchedule from "./pages/TeamSchedule";



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
            },
            {
                path: "staff/",
                element: <StaffPage />
            },
            {
                path: "schedule/",
                element: <TeamSchedule/>
            }

        ]
    }
])

export default router;