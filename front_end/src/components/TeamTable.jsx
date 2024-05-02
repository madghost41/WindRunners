import { useOutletContext } from "react-router-dom";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";



const TeamTable = () => {
    const { teamRoster, removeFromRoster } = useOutletContext();

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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {teamRoster.map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{player.Name}</td>
                            <td>{player.Position}</td>
                            <td>{player.Experience}</td>
                            <td>{player.College}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => removeFromRoster(player.PlayerID)}
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
};

export default TeamTable;