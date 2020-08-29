import React from "react";
import { Link } from "react-router-dom";

const MySidebar = (props) => {
  const { slide, statusPage } = props;
  console.log(statusPage);
  return (
    <div className="menu-box-rel">
      <div className={slide ? "menu-box-ab slide" : "menu-box-ab"}>
        <Link to="/ksrt">
          <div className={statusPage === "/ksrt" ? "on-item" : "menu-item"}>
            <span>Home</span>
          </div>
        </Link>
        <Link to="/setting">
          <div className={statusPage === "/setting" ? "on-item" : "menu-item"}>
            <span>Setting</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MySidebar;
