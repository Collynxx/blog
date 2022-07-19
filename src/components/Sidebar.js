import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="menu-header">
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
      <label for="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul className="sidebarMenuInner">
          <li>Category</li>

          <li>
            <div class="dropdown">
              <div class="dropbtn">
                Choose Category
                <i class="fa fa-caret-down"></i>
              </div>
              <div class="dropdown-content" id="myDropdown">
                <Link to={"#"}>News</Link>
                <Link to={"#"}>Politics</Link>
                <Link to={"#"}>Entertainment</Link>
                <Link to={"#"}>Technology</Link>
                <Link to={"#"}>Sports</Link>
                <Link to={"#"}>Education</Link>
              </div>
            </div>
          </li>
          <ul>
            <Link to={"#"}>Login</Link>
          </ul>
        </ul>
        <div className="contact">
          <p>Contact us</p>
          <a href="mailto:Genesysblog@gmail.com" target="_blank">
            Genesysblog@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
