import React from "react";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const Header = (props) => {
  const { slide, status } = props;
  return (
    <div className="header">
      <Container className="in-header">
        <div className="text-header d-flex justify-content-between align-items-center">
          <div className="menu-togel mr-3">
            <input onClick={() => slide(!status)} type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <span className="ml-2">Arfandy</span>
          </div>
        </div>
        <div className="text-header">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className="ml-2">LogOut</span>
        </div>
      </Container>
    </div>
  );
};
export default Header;
