import React from 'react'
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap'
import '../container/style.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/logo.png'

function Header() {
  return (
    <>
      <Container fluid className="headerTop">
        <Row>
          <Col xs={12}>
            <ul className="navbarWrp">
              <li><Link to="/">Pricing</Link></li>
              <li><Link to="/">Register</Link></li>
              <li><Link to="/">Login</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid className="header">
        <Row >
          <Col>
            <div className="topBar">
              <img src={logo} alt="logo" />
              <span>
                Reala
            </span>
              <span>
                Real Estate & Renting<br />
              WordPress Theme
            </span>
            </div>
          </Col>
          <Col>
            <span className="holder">
              <FontAwesomeIcon size="lg" icon={faPencilAlt} />
              <span>info@example.com</span>

              <FontAwesomeIcon size="lg" icon={faPencilAlt} />
              <span>info@example.com</span>
            </span>
          </Col>
          <Col>
            <Button variant="primary" block>
              Block level button
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </Button>
          </Col>
        </Row>
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
      </Container>
    </>
  )
}

export default Header
