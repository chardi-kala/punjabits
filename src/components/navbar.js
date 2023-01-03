import {Nav, Navbar, Container, NavDropdown, Offcanvas} from 'react-bootstrap';
import "../styles/navbar.css";

function Header() {
  const expand = 'md';
  return (
      <Navbar bg='transparent' collapseOnSelect sticky='top' expand={`${expand}`} className='navbar'>
          <Navbar.Brand href="#home" className='navbar-text'>
            <span className='punjabits'></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Let's Explore
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body bg='dark'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home" className='navbar-text glossy'>Home</Nav.Link>
                  <Nav.Link href="/gallery" className='navbar-text glossy'>Gallery</Nav.Link>
                  <Nav.Link href="#pricing" className='navbar-text glossy'>Wonders</Nav.Link>
                  <Nav.Link href="#events" className='navbar-text glossy'>Events</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
      </Navbar>
  );
}

export default Header;