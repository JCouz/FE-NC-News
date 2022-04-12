import { Link } from 'react-router-dom';
import { User } from 'react-feather';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
  return (
    <Container id="add-comment-box">
      <Row>
        <Col xs="auto">
          <Link className="header-link" to="/">
            <h1>NC News</h1>
          </Link>

          <p>
            <em>
              <strong>Refactoring your news! </strong>
            </em>
            &#129323;
          </p>
        </Col>
        <Col className="position-end">
          <User />
          <p>cooljmessy</p>
        </Col>
      </Row>
    </Container>
  );
}
