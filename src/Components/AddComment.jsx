import { useState } from 'react';
import * as api from '../api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Plus } from 'react-feather';

export default function AddComment({ setComments, article_id }) {
  // this is a variable, commentInput is declared as '' in useState, setCommentInput is reassigning that variable
  const [commentInput, setCommentInput] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .addComment(article_id, { body: commentInput, username: 'cooljmessy' })
      .then((comment) => {
        console.log(comment);
        setCommentInput('');
        setComments((currentComment) => {
          return [comment, ...currentComment];
        });
      });
  };
  return (
    <Container id="add-comment-box">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} className="mt-2">
            <Form.Control
              type="text"
              placeholder="Add Comment..."
              value={commentInput}
              onChange={(event) => {
                setCommentInput(event.target.value);
              }}
            />
          </Form>
        </Col>
        <Col xs="auto">
          <Button variant="danger" className="m-2" type="submit">
            Submit
            <Plus className="mx-2" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
