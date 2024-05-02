import { useOutletContext } from "react-router-dom";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


const PlayerTable = ({ players }) => {
    const [teamRoster, setTeamRoster] = useState([])
    const { addToRoster, removeFromRoster, checkOnTeam } = useOutletContext();

    const handleAddToRoster = (player) => {
        addToRoster(player);
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Position</th>
                        <th>Experience</th>
                        <th>College</th>
                    </tr>
                </thead>
                <tbody>
                    {players && Array.isArray(players) && players.map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{player.Name}</td>
                            <td>{player.Position}</td>
                            <td>{player.Experience}</td>
                            <td>{player.College}</td>
                            <td>
                                {teamRoster.includes(player) ? (
                                    <Button variant="danger" onClick={() => removeFromRoster(player)}>Remove</Button>
                                ) : (
                                    <Button variant="success" onClick={() => handleAddToRoster(player)}>Add</Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}




export default PlayerTable;