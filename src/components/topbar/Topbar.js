import React from 'react';
import './topbar.css';
import {Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'


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
                      <Link className="link" to="/about">
                      About
                      </Link>

                  </li>
                  <li className="topListItem">
                      <Link className="link" to="/service">
                      Service
                      </Link>

                  </li>
                  <li className="topListItem">
                      <Link className="link" to="/gallery">
                      Gallery
                      </Link>

                  </li>
                  <li className="topListItem">
                      <Link className="link" to="/team">
                      Team
                      </Link>

                  </li>
                  <li className="topListItem">
                      <Link className="link" to="/blog">
                      Blog
                      </Link>

                  </li>
                  <li className="topListItem">
                      <Link className="link" to="/contact">
                      Contact
                      </Link>

                  </li>

              </ul>

          </div>
          <div className="topRight">
           <img src= {Logo} alt="logo" className="topImg" />
          </div>
       </div>
    )
}

export default Navbars;
