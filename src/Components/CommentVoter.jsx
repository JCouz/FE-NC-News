import { useState, useEffect } from 'react';
import * as api from '../api';
import { ArrowUpCircle, ArrowDownCircle } from 'react-feather';
import Button from 'react-bootstrap/Button';

export default function CommentVoter({ comment_id, votes }) {
  const [voteInc, setVoteInc] = useState(0);
  const [voteError, setVoteError] = useState(null);

  useEffect(() => {
    api.updateComment(comment_id, voteInc).catch(() => {
      setVoteError('Oops, something went wrong');
    });
  }, [comment_id, voteInc]);

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
      <p className="inner-text mt-1">Votes: {votes + voteInc}</p>
      {voteError && <p>{voteError}</p>}
    </>
  );
}
