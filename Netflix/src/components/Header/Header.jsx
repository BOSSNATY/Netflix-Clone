import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NetflixLogo from "../../assets/images/Logo.jpg";
function Header() {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home" className="text-light d-flex">
          <img
            src={NetflixLogo}
            alt="Netflix Logo"
            width="100"
            className="d-flex"
          />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto ">
            <Nav.Link href="#home" className="text-light px-4">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-light px-4">
              TVShows
            </Nav.Link>
            <Nav.Link href="#home" className="text-light px-4">
              Movies
            </Nav.Link>
            <Nav.Link href="#link" className="text-light px-4">
              Latest
            </Nav.Link>
            <Nav.Link href="#home" className="text-light px-4">
              MyList
            </Nav.Link>
            <Nav.Link href="#link" className="text-light px-4">
              Browse by Languages
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home" className="text-light d-flex">
          <SearchIcon color="light " />
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="text-light d-flex">
          <NotificationsNoneIcon />
        </Navbar.Brand>
        <Navbar.Toggle
          className="bg-secondary"
          aria-controls="basic-navbar-nav "
        />
      </Container>
    </Navbar>
  );
}

export default Header;
