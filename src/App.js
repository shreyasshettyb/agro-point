import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './sprout.png';
import arrow from './white_arrow.svg';
// import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import SignIn from './components/SignIn';
// import NavDropdown from 'react-bootstrap/NavDropdown';


const App =() => {
  return (
    // <><Navbar bg="dark" expand="lg" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home"><img src={logo} alt="Logo" width="30" heigth="30" />Agro-Point</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <button type="button"><Nav.Link as={Link} to="/SignIn">Sign-In</Nav.Link></button>
    //         <Nav.Link as={Link} to="/Reviews">Reviews</Nav.Link>
    //         <Nav.Link href="#aboutus">About Us</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
   <> <section className='banner'>
      <div className="jumbotron jumbotron-fluid">
          <div className="container bannerImg">
          {/* <img src={banner} alt="Farmer Trust" width="750" heigth="366" /> */}
          <h1>“Agriculture reviews that Point you in the right direction”</h1>
          <button type="button"><Nav.Link href="#Reviews">Explore Reviews<img src={arrow} alt="Arrow" width="30" heigth="30" /></Nav.Link></button>
          </div>
      </div>
    </section>
    <section className='RecentReviews'>
    <Container>
    <h3>Recent Reviews:</h3>
      <Row>
        <Col className="reviews">
          <h4>Name Reviewd ProductName</h4>
          <span><p>Starts/Ratings</p></span>
          <p>Loved Using it,It was Good and Fast</p>
        </Col>
        <Col className="reviews"><h4>Name Reviewd ProductName</h4>
          <span><p>Starts/Ratings</p></span>
          <p>Loved Using it,It was Good and Fast</p></Col>
          <Col className="reviews"><h4>Name Reviewd ProductName</h4>
          <span><p>Starts/Ratings</p></span>
          <p>Loved Using it,It was Good and Fast</p></Col>
          
     </Row>
      <Row>
      <Col className="reviews"><h4>Name Reviewd ProductName</h4>
          <span><p>Starts/Ratings</p></span>
          <p>Loved Using it,It was Good and Fast</p></Col>
          <Col className="reviews"><h4>Name Reviewd ProductName</h4>
          <span><p>Starts/Ratings</p></span>
          <p>Loved Using it,It was Good and Fast</p></Col>
          <Col className="reviews"><h4>Name Reviewd ProductName</h4>
          <span><p>Starts/Ratings</p></span>
          <p>Loved Using it,It was Good and Fast</p></Col>
     </Row> 
  </Container>
    </section>
    <Container id="aboutus">
    <h3>About Us:</h3>
      <p>Welcome to our agricultural review site! We are a group of students passionate about all things agriculture. We created this site as a resource for people looking for reliable information and honest reviews about various agricultural products and practices.

.We have a wealth of knowledge and experience to share with our readers.

We understand the importance of staying up-to-date on the latest research and innovations in the agricultural industry. That's why we strive to provide accurate, well-researched content that our readers can trust.

Thank you for visiting our site. We hope you find it informative and helpful as you navigate the world of agriculture.</p>
      
    </Container>
      </>
  );
  
}


export default App;
