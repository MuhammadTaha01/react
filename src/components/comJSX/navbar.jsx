import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import websiteLogo from '../../images/hackunia.png';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={websiteLogo}
            alt="Hackunia Logo"
            width={150}
            height={40}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Contact-Hackunia">Contact Planet Hackunia</Nav.Link>
            <Nav.Link as={Link} to="/About-Hackunia">About Planet Hackunia</Nav.Link>
            <NavDropdown title="ALERTS" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Destroyed-Areas">Destroyed Areas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Safezone-Areas">Safezone Areas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={'/Captured-Areas'}>Captured Areas By Aliens</NavDropdown.Item>
            </NavDropdown>
            <Stack direction="horizontal" gap={2}>
              <Badge pill bg="danger" text="light">
                !!!
              </Badge>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
