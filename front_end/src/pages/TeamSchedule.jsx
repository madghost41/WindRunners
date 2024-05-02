import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../utilities';
import GameCard from '../components/GameCard';

const TeamSchedule = () => {
    const [team, setTeam] = useState([])

    const getSchedule = async () => {
        try {
            let response = await api.get('noun/newapi/');
            console.log("Team", response.data.body.schedule)
            setTeam(response.data.body.schedule);
        } catch (error) {
            console.error("Error get schedule", error)
        }
    };

    useEffect(() => {
        getSchedule();
    }, [])

    
    return (
        <>
          {team && Array.isArray(team) && team.map((game, index) =>(
             <GameCard key={index} game={game}/>
        ))}
        </>
    )
}

export default TeamSchedule;