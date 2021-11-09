import React from 'react';
import './topbar.css';
import {Link } from 'react-router-dom';


const Navbars = () => {
    return (
        <div className="top">
          <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
          </div>
          <div className="topCenter">
              <ul className="topList">
                  <li className="topListItem">
                      <Link className="link" to="/">
                      Home
                      </Link>

                  </li>
                  <li className="topListItem">
                      <Link className="link" to="/">
                      About
                      </Link>

                  </li>
                  <li className="topListItem">
                      <Link className="link" to="/">
                      Service
                      </Link>

                  </li>
                  <li className="topListItem">
                      <Link className="link" to="/">
                      Gallery
                      </Link>

                  </li>
                  <li className="topListItem">
                      <Link className="link" to="/">
                      Team
                      </Link>

                  </li>
                  <li className="topListItem">
                      <Link className="link" to="/">
                      Blog
                      </Link>

                  </li>
                  <li className="topListItem">
                      <Link className="link" to="/">
                      Contact
                      </Link>

                  </li>

              </ul>

          </div>
          <div className="topRight">
hi
          </div>
       </div>
    )
}

export default Navbars;
