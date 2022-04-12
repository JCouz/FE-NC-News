import timeAgo from '../utils';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from '../api';
import ArticleVoter from './ArticleVoter';
import Comments from './Comments';
import AddComment from './AddComment';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export default function ArticlePage() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { title, body, topic, author, created_at, comment_count } =
    singleArticle;
  const [articleVotes, setArticleVotes] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchArticlePage(article_id)
      .then((article) => {
        setSingleArticle(article);
        setArticleVotes(article.votes);
        setIsLoading(false);
      })
      .catch((err) => setErrorMsg('Invalid Article ID'));
  }, [article_id]);

  if (errorMsg.length > 0)
    return (
      <Container id="errors">
        <Row>
          <Col>
            <Alert variant="danger">{errorMsg}</Alert>
          </Col>
        </Row>
      </Container>
    );
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <section className="article-page m-3 py-2">
        <Container>
          <Row>
            <Col xs="auto">
              <strong>{title}</strong>
              <Col className="my-2">
                <ArticleVoter
                  article_id={article_id}
                  articleVotes={articleVotes}
                />
              </Col>
              <Col>{body}</Col>
              <Col className="my-2">
                User: <strong> {author}</strong>
              </Col>
            </Col>
            <Col className="my-2">
              {topic[0].toUpperCase() + topic.substring(1)}
            </Col>
            <Col className="my-2">
              Created: {timeAgo.format(new Date(created_at))}
            </Col>
            <Col className="my-2">Comments: {comment_count}</Col>
          </Row>
        </Container>
      </section>
      <section>
        <h3 id="comments-header">Comments</h3>
        <AddComment article_id={article_id} setComments={setComments} />

        <Comments
          comments={comments}
          setComments={setComments}
          article_id={article_id}
        />
      </section>
    </>
  );
}
