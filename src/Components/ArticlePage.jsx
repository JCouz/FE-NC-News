import timeAgo from '../utils';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from '../api';

export default function ArticlePage() {
  const { article_id } = useParams();

  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.log(singleArticle);

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticlePage(article_id).then((article) => {
      setSingleArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  const { title, body, topic, author, votes, created_at, comment_count } =
    singleArticle;

  return (
    <section key={article_id} className="article-page">
      <dl>
        <dt>
          <strong>{title}</strong>
        </dt>
        <dt>{author}</dt>
        <dt>{body}</dt>
        <dt className="inner-text">
          {topic[0].toUpperCase() + topic.substring(1)}
        </dt>
        <dt className="inner-text">
          Created: {timeAgo.format(new Date(created_at))}
        </dt>
        <dt className="inner-text">Votes: {votes}</dt>
        <dt>Comments: {comment_count}</dt>
      </dl>
    </section>
  );
}
