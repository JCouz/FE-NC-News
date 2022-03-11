import { useState, useEffect } from 'react';
import * as api from '../api';
import CommentCard from './CommentCard';

export default function Comments({ article_id, comments, setComments }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    api.fetchArticleComments(article_id).then((articleComments) => {
      setComments(articleComments);
      setIsLoading(false);
    });
  }, []);

  const mappedComments = comments.map(
    ({ comment_id, body, author, votes, created_at }) => {
      return (
        <CommentCard
          key={'comment' + comment_id}
          comment_id={comment_id}
          body={body}
          author={author}
          votes={votes}
          created_at={created_at}
        />
      );
    }
  );

  if (isLoading) return <p>Loading...</p>;

  return mappedComments;
}
