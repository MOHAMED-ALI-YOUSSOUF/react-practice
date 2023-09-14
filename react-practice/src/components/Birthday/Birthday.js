import { Col, Container, Row } from "react-bootstrap"
import Person from "./Person"

const Birthday = () => {
  return (
    <Container>
      <h1>Bugun Doganlar</h1>
      <p>Bugun dogan{} kisi var</p>
      <Row>
        <Col>
            <Person/>
        </Col>
      </Row>
    </Container>
  )
}

export default Birthday
