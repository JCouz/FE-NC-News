import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <nav>
        <div>
          <Link className="header-link" to="/">
            <h1>NC News</h1>
          </Link>

          <p>
            <em>
              <strong>Refactoring your news! </strong>
            </em>
            &#129323;
          </p>
        </div>
        <span className="topic-links">
          <section>
            <Link className="coding-link" to="/topics/coding">
              <strong>Coding</strong>
            </Link>
          </section>
          <section>
            <Link className="football-link" to="/topics/football">
              <strong>Football</strong>
            </Link>
          </section>
          <section>
            <Link className="cooking-link" to="/topics/cooking">
              <strong>Cooking</strong>
            </Link>
          </section>
        </span>
        <p>User</p>
      </nav>
    </div>
  );
}
