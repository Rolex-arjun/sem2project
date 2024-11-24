import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Expense Manager</div>
      <ul className="navbar-links">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

//Navbar.css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4CAF50;
  padding: 10px 20px;
}

.navbar-brand {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.navbar-links {
  list-style: none;
  display: flex;
}

.navbar-links li {
  margin: 0 10px;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.navbar-links a:hover {
  text-decoration: underline;
}
