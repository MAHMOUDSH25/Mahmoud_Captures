import { NavLink } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <div id="footer" className="footer-links row justify-content-center">
        <div className="col-1">
          <NavLink
            exact="true"
            id="NavBar-links"
            activeclassname="active"
            to="/About"
          >
            ABOUT
          </NavLink>
        </div>
        <div className="col-1">
          <NavLink
            exact="true"
            id="NavBar-links"
            activeclassname="active"
            to="/Contact"
          >
            CONTACT ME
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Footer;
