import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><b>Shrikant Jamale</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='main-navbar'>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects" activeClassName="active">Projects</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
