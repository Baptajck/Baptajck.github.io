/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';

import './sidebar.scss';

const Sidebar = () => (
  <>
    { /* Version Mobile */ }
    <div className="mobile_layout">
      <nav role="navigation">
        <label className="menu back">
          <input type="checkbox" />
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" />
            <path className="line--1" d="M0 40h62c18 0 18-20-17 5L31 55" />
            <path className="line--2" d="M0 50h80" />
            <path className="line--3" d="M0 60h62c18 0 18 20-17-5L31 45" />
          </svg>
          <nav className="sidebar_mobile">
            <div className="container_logo">
              <h1 className="sidebar_mobile_title">Likemovie</h1>
            </div>
            <ul className="sidebar_mobile_links">
              <li className="sidebar_mobile_links_li active">
                <NavLink to="/likemovie" className="sidebar_mobile_links_item">
                  Accueil
                </NavLink>
              </li>
              <li className="sidebar_mobile_links_li">
                <NavLink to="/search" className="sidebar_mobile_links_item">
                  Recherche
                </NavLink>
              </li>
              <li className="sidebar_mobile_links_li">
                <NavLink to="/" className="sidebar_mobile_links_item">
                  A propos
                </NavLink>
              </li>
              <li className="sidebar_mobile_links_li">
                <NavLink to="/contact" className="sidebar_mobile_links_item">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </label>
      </nav>
    </div>
    { /* Version Desktop */ }
    <div className="classic_layout">
      <nav role="navigation">
        <div className="sidebar_classic">
          <div className="container_logo">
            <h1 className="sidebar_classic_title">Likemovie</h1>
          </div>
          <nav className="sidebar_classic_links">
            <ul>
              <li className="sidebar_classic_links_li active">
                <NavLink to="/likemovie" className="sidebar_classic_links_item">
                  Accueil
                </NavLink>
              </li>
              <li className="sidebar_classic_links_li">
                <NavLink to="/search" className="sidebar_classic_links_item">
                  Recherche
                </NavLink>
              </li>
              <li className="sidebar_classic_links_li">
                <NavLink to="/" className="sidebar_classic_links_item">
                  A propos
                </NavLink>
              </li>
              <li className="sidebar_classic_links_li">
                <NavLink to="/contact" className="sidebar_classic_links_item">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  </>
);

export default Sidebar;
