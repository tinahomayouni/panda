import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logo.png'


function InfoHeader() {
  return (
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

  )
}

export default InfoHeader
