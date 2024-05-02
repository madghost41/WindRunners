import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import { userLogout } from '../utilities';



const NavBar = ({setUser, user}) => {
    return(
      <Navbar expand="lg" className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {!user ? (
                <>
                  <Nav.Link as={Link} to="/signup/">SignUp</Nav.Link>
                  <Nav.Link as={Link} to="/login/">Login</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="team/">Team Roster</Nav.Link>
                  <Nav.Link as={Link} to="players/">Players</Nav.Link>
                  <Nav.Link as={Link} to="staff/">Staff</Nav.Link>
                  <Nav.Link as={Link} to="schedule/">Team Schedule</Nav.Link>
                  <Button variant="outline-danger" onClick={async () => setUser(await userLogout())}>Logout</Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;