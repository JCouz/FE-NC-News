import axios from 'axios';

export const fetchArticles = (topic) => {
  // routing notes, add links in header for each topic
  if (topic) {
    return axios
      .get(
        `https://nc-news-example-seminar-3-9.herokuapp.com/api/articles?topic=${topic}`
      )
      .then((res) => {
        return res.data.articles;
      });
  } else
    return axios
      .get(`https://nc-news-example-seminar-3-9.herokuapp.com/api/articles`)
      .then((res) => {
        return res.data.articles;
      });
};

export const fetchArticlePage = (article_id) => {
  return axios
    .get(
      `https://nc-news-example-seminar-3-9.herokuapp.com/api/articles/${article_id}`
    )
    .then((res) => {
      return res.data.article;
    });
};
