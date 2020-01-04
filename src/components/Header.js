import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link to="/productos" className="navbar-brand">React CRUD & Routing</Link>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/productos" className="nav-link">Productos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/productos/nuevo" className="nav-link">Nuevo Producto</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header