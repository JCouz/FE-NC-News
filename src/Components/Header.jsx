import { Link } from "react-router-dom";

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

        <p>User: cooljmessy</p>
      </nav>
    </div>
  );
}
