import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Navbar } from 'react-bootstrap'

function MainNavbar() {
  return (
    <Row>
      <Navbar>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
            <ul className="submenu">
              <li>
                <Link to="/">SubItem</Link>
              </li>
              <li>
                <Link to="/">SubItem</Link>
              </li>
              <li>
                <Link to="/">SubItem</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </Navbar>
    </Row>
  )
}

export default MainNavbar
