import { Navbar, Container, Nav, NavDropdown, NavItem } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/netflix_logo.png"
            alt="Netflix logo"
            width="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link className="fw-bold text-light" href="#">
              Tv Show
            </Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          <Nav className="d-flex align-items-center">
            <Nav.Link href="#">
              <i className="bi bi-search text-light"></i>
            </Nav.Link>
            <Nav.Link href="/profile.html" className="text-light">
              FELICE
            </Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-bell-fill text-light"></i>
            </Nav.Link>

            <NavDropdown
              title={
                <img
                  src="/avatar.png"
                  alt="avatar"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
              }
              id="avatar-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#">
                <img
                  src="/kids_icon.png"
                  alt="kid"
                  width="20"
                  className="me-2"
                />
                KIDS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <i className="bi bi-gear-fill text-light"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
