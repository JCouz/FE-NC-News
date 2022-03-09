import './App.css';
import Header from './Components/Header';
import ArticlesList from './Components/ArticlesList';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/topics/:topic" element={<ArticlesList />} />
      </Routes>
    </div>
  );
}

export default App;
