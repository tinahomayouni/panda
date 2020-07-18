import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../container/style.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Container fluid className="header">
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
  )
}

export default Header
