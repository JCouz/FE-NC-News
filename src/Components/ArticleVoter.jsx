import { useState, useEffect } from "react";
import * as api from "../api";

export default function ArticleVoter({ article_id, articleVotes }) {
  const [voteInc, setVoteInc] = useState(0);
  const [voteError, setVoteError] = useState(null);
  useEffect(() => {
    api.updateArticle(article_id, voteInc).catch(() => {
      setVoteError("Oops, something went wrong");
    });
  }, [article_id, voteInc]);

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
      <p className="inner-text">Votes: {articleVotes + voteInc}</p>
      {voteError && <p>{voteError}</p>}
    </>
  );
}
