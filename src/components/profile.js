import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const navbar=()=>{
    return(
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav
            <Nav.Link as={Link} to="/Reviews">Reviews</Nav.Link>
            <Nav.Link href="/#aboutus">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default navbar;

