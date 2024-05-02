import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const GameCard = ({ game }) => {
    return (
        <>
        <Card>
            <Card.Header>{game.home}</Card.Header>
            <Card.Body>
                <Card.Title>{game.gameWeek}</Card.Title>
                <Card.Text>{game.away}:{game.awayPts} - {game.home}:{game.homePts}</Card.Text>
            </Card.Body>
        </Card>
        </>
    )
};

export default GameCard