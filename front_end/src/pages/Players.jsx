import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../utilities';
import PlayerTable from '../components/PlayerTable';

const PlayersPage = () => {
    const [players, setPlayers] = useState([]);
   
    const getPlayers = async () => {
        try {
            let response = await api.get('noun/');
            console.log("Get Player", response.data);
            setPlayers(response.data.data);
            console.log("Players", response.data.data)
        } catch (error) {
            console.error("Error fetching players", error)
        }
    };

    useEffect(() => {
        getPlayers();
    }, []);

    console.log("Players:", players)


    return (
        <>
            <div>
                <h1>Players Page</h1>
                <PlayerTable players={players} />
            </div>

        </>
    )
}


export default PlayersPage