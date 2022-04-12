import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ErrorPage() {
  return (
    <Container id="errors">
      <Row>
        <Col>
          <strong> Oops, this page does not exist!</strong>
        </Col>
      </Row>
    </Container>
  );
}
