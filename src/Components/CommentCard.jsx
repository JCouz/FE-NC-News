import timeAgo from '../utils';
import CommentVoter from './CommentVoter';

export default function CommentCard({
  body,
  author,
  votes,
  created_at,
  comment_id,
}) {
  return (
    <section className="comment-card">
      <dl>
        <dt>{body}</dt>
        <dt>User: {author}</dt>

        <dt>{timeAgo.format(new Date(created_at))}</dt>
        <dt>
          <CommentVoter votes={votes} comment_id={comment_id} />
        </dt>
      </dl>
    </section>
  );
}
