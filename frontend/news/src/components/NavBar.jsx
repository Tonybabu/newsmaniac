import React, { useState, useEffect } from 'react';
import './style.css';
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import a2 from "../assets/a2.png"
function NavBar() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = sessionStorage.getItem('email');
    if (email) {
      setIsLoggedIn(true);
      setUser(email);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('email');
    setIsLoggedIn(false);
    setUser(null);
  };

  const setNews = () => {
    if (search) {
      navigate(`/${search}`);
    }
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <img src={a2} alt="NewsManiac" width="120" height={"50px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/ipl">
              <Nav.Link className="hover-link nav-item">Ipl</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/finance">
              <Nav.Link className="hover-link nav-item">Finance</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/politics">
              <Nav.Link className="hover-link nav-item">Politics</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/movie">
              <Nav.Link className="hover-link nav-item">Movies</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/technology">
              <Nav.Link className="hover-link nav-item">Technology</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/celeb">
              <Nav.Link className="hover-link nav-item">Celebrities</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <FormControl
              type="text"
              placeholder="e.g. Science"
              className="mr-2 news-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="primary" className="search-button" onClick={setNews}>
              Search
            </Button>
          </Form>
          {isLoggedIn ? (
            <button onClick={handleLogout} className='logout'>Logout</button>
          ) : (
            <Link to="/login" className="Link">Login</Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
