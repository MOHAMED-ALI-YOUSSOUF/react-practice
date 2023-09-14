import react from "react";
import data from "../../assets/data/student.json"
import { Col, Container, Row } from "react-bootstrap";


import React from 'react'

const StudentCard = () => {
  return (
    <Container>
        <Row>
           
            {
                data.map((student, index)=> <Col>
                <Card/>

                 </Col>)
            }
           

        </Row>
      
    </Container>
  )
}

export default StudentCard
