import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

export default function Header() {
  return (
    <Container fluid className="header m-2">
      <Row>
        <Col>
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
        <Col xs="auto" className="d-flex align-items-center">
          <Stack className="d-flex justify-content-center">
            <img
              className="user-icon "
              src="https://cdn.shopify.com/s/files/1/0194/0815/8819/t/18/assets/svg--character--mr-messy.svg?v=16133629632717342549"
              alt="User Icon"
              width={50}
              height={50}
            />
            <div>cooljmessy</div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
