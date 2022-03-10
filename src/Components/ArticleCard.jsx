import timeAgo from '../utils';
import { Link } from 'react-router-dom';

export default function ArticleCard({
  article_id,
  title,
  created_at,
  topic,
  votes,
}) {
  console.log(typeof topic);
  return (
    <section key={article_id} className="article-card">
      <dl>
        <dt>
          <Link className="article-title" to={`/articles/${article_id}`}>
            <strong>{title}</strong>
          </Link>
        </dt>
        <dt className="inner-text">
          {topic[0].toUpperCase() + topic.substring(1)}
        </dt>
        <dt className="inner-text">Votes: {votes}</dt>
        <dt className="inner-text">{timeAgo.format(new Date(created_at))}</dt>
      </dl>
    </section>
  );
}
