import React, { useState } from "react";
import logo from "../Images/pizzaLogo.png";
import img from "../Images/download.png";

import { Link } from "react-router-dom";
import "./nav.css";
import SegmentIcon from "@mui/icons-material/Segment";
function Nav() {
  const [toggle, setToggle] = useState(false);
  const toggleList = () => {
    setToggle(!toggle);
  };
  return (
    <div className="navBar">
      <div className="logo">
        <Link to="/" className="logoLink">
          <img src={logo} />
          <h2>Yome~Pizza</h2>
        </Link>
      </div>

      <div className="items">
        <Link to="/Menu" className="Links">
          Menu
        </Link>
        <Link to="/contact" className="Links">
          contact
        </Link>
        <Link to="/AboutUs" className="Links">
          AboutUs
        </Link>
        <Link to="/SignIn/SignUp" className="Links">
          SignIn / SignUP
        </Link>
        <Link to="/ FeedBack" className="Links">
          FeedBack
        </Link>
      </div>
      <div className="toggleButton">
        <button onClick={toggleList}>
          <SegmentIcon />
        </button>
      </div>
      <div className="toggleListItem" id={toggle ? "open" : "close"}>
        <div className="LinkList">
          <Link to="/Menu" className="Links">
            Menu
          </Link>
        </div>
        <div className="LinkList">
          <Link to="/contact" className="Links">
            Contact
          </Link>
        </div>
        <div className="LinkList">
          <Link to="/AboutUs" className="Links">
            AboutUs
          </Link>
        </div>
        <div className="LinkList">
          <Link to="/ Location" className="Links">
            Location
          </Link>
        </div>
        <div className="LinkList">
          <Link to="/SignIn/SignUp" className="Links">
            SignIn / SignUP
          </Link>
        </div>
        <div className="LinkList">
          <Link to="/ FeedBack" className="Links">
            FeedBack
          </Link>
        </div>
        <div className="LinkList">
          <Link to="/Policies" className="Links">
            Policies
          </Link>
        </div>
        <div className="LinkList">
          <Link to="/ResponsibleDisclosure" className="Links">
            Responsible Disclosure
          </Link>
        </div>
        <div className="deliveryImg">
          <img src={img} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
