import { useState, useEffect } from 'react';
import * as api from '../api';

export default function CommentVoter({ comment_id, votes }) {
  const [voteInc, setVoteInc] = useState(0);
  const [voteError, setVoteError] = useState(null);

  useEffect(() => {
    api.updateComment(comment_id, voteInc).catch(() => {
      setVoteError('Oops, something went wrong');
    });
  }, [voteInc]);

  return (
    <>
      <button
        disabled={voteInc === 1}
        onClick={() => {
          setVoteInc((currentVotes) => {
            return currentVotes + 1;
          });
        }}
      >
        ⇧
      </button>
      <button
        disabled={voteInc === -1}
        onClick={() => {
          setVoteInc((currentVotes) => {
            return currentVotes - 1;
          });
        }}
      >
        ⇩
      </button>
      <p className="inner-text">Votes: {votes + voteInc}</p>
      {voteError && <p>{voteError}</p>}
    </>
  );
}
