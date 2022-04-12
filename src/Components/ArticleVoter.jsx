import { useState, useEffect } from 'react';
import * as api from '../api';
import { ArrowUpCircle, ArrowDownCircle } from 'react-feather';
import Button from 'react-bootstrap/Button';

export default function ArticleVoter({ article_id, articleVotes }) {
  const [voteInc, setVoteInc] = useState(0);
  const [voteError, setVoteError] = useState(null);
  useEffect(() => {
    api.updateArticle(article_id, voteInc).catch(() => {
      setVoteError('Oops, something went wrong');
    });
  }, [article_id, voteInc]);

  return (
    <>
      <Button
        variant="outline-danger"
        size="sm"
        disabled={voteInc === 1}
        onClick={() => {
          setVoteInc((currentVotes) => {
            return currentVotes + 1;
          });
        }}
      >
        <ArrowUpCircle />
      </Button>
      <Button
        variant="outline-danger"
        size="sm"
        disabled={voteInc === -1}
        onClick={() => {
          setVoteInc((currentVotes) => {
            return currentVotes - 1;
          });
        }}
      >
        <ArrowDownCircle />
      </Button>
      <p className="inner-text mt-1">Votes: {articleVotes + voteInc}</p>
      {voteError && <p>{voteError}</p>}
    </>
  );
}
