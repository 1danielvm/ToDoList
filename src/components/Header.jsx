import React from "react";
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="Header">
      <div className="Header__brand">
        <Link to='/'>
          <div className="Header__bran--name">
            <h2>To do List</h2>
          </div>
        </Link>
        <div className="Header__bran--date">
          <p>Sabado, 11 de Julio</p>
        </div>
      </div>
      <div className="Header__user">
        <img
          src="https://s.gravatar.com/avatar/d8773e49c65cea0d82107b75110918b3?s=80"
          alt="avatar"
        />
      </div>
    </header>
  );
};

export default Header;
