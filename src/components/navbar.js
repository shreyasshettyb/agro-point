import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../sprout.png';
import Container from 'react-bootstrap/Container';

const navbar=()=>{
    return(
<Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt="Logo" width="30" heigth="30" />Agro-Point</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <button type="button" ><Nav.Link as={Link} to="/SignIn">Sign-In</Nav.Link></button>
            <Nav.Link as={Link} to="/Reviews">Reviews</Nav.Link>
            <Nav.Link href="/#aboutus">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default navbar;

