import timeAgo from '../utils';
import CommentVoter from './CommentVoter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import * as api from '../api';
import { useState } from 'react';

export default function CommentCard({
  body,
  author,
  votes,
  created_at,
  comment_id,
  reloadComments,
}) {
  const [deleted, setDeleted] = useState(false);

  function deleteComment() {
    api.deleteComment(comment_id);
    setDeleted(true);
  }

  function renderDelete() {
    return author === 'cooljmessy' ? (
      <Button
        variant="danger"
        size="sm"
        className="float-right"
        onClick={() => deleteComment()}
      >
        Delete
      </Button>
    ) : (
      ''
    );
  }

  if (deleted) {
    return (
      <Alert variant="danger" style={{ textAlign: 'center' }}>
        "Comment Deleted"
      </Alert>
    );
  }

  return (
    <section className="comment-card">
      <Container className="my-1">
        <Row>
          <Col>{body}</Col>
        </Row>
        <Row className="my-1">
          <Col>
            User: <strong>{author}</strong>
          </Col>
        </Row>
        <Row>
          <Col className="my-1">{timeAgo.format(new Date(created_at))}</Col>
        </Row>
        <Row>
          <Col>
            <CommentVoter votes={votes} comment_id={comment_id} />
          </Col>
          <Col xs="auto">{renderDelete()}</Col>
        </Row>
      </Container>
    </section>
  );
}
