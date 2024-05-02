import React from "react";
import { useOutletContext } from "react-router-dom";
import TeamTable from "../components/TeamTable";

const TeamPage = () => {
    

    return (
        <>
        <h1>WindRunners Roster</h1>
        <TeamTable />
        </>
    )
}


export default TeamPage;