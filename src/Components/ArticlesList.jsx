import * as api from '../api';
import { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';

export default function ArticlesList() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles().then((articles) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>loading..</p>;
  return (
    <div id="article-list">
      {articlesList.map(({ article_id, title, topic, created_at, votes }) => {
        return (
          <ArticleCard
            key={article_id}
            article_id={article_id}
            title={title}
            topic={topic}
            votes={votes}
            created_at={created_at}
          />
        );
      })}
    </div>
  );
}
