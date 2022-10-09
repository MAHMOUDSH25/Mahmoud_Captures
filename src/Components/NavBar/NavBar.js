import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import LOGOM from "../../assets/images/LOGOM.png";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function NavBar() {
  return (
    <div className="Header">
      <nav
        className="navbar navbar-dark bg-dark"
        aria-label="Dark offcanvas navbar"
      >
        <div className="container-fluid">
          <NavLink
            id="navbar-brand"
            exact="true"
            activeclassname="active"
            to="/"
          >
            <img className="logo" src={LOGOM} />
          </NavLink>
          <span className="ahmoud">AHMOUD</span>
          <span className="captures">CAPTURES</span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
