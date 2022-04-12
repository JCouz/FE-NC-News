import { Link } from 'react-router-dom';
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
        <Col className="user">
          <img
            className="user-icon"
            src="https://cdn.shopify.com/s/files/1/0194/0815/8819/t/18/assets/svg--character--mr-messy.svg?v=16133629632717342549"
            alt="User Icon"
            width={50}
            height={50}
          />
          <p>cooljmessy</p>
        </Col>
      </Row>
    </Container>
  );
}
