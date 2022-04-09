import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import ArticlesList from "./Components/ArticlesList";
import ArticlePage from "./Components/ArticlePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/topics/:topic" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
