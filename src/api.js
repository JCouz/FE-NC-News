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

export const fetchTopics = () => {
  return axios
    .get('https://nc-news-example-seminar-3-9.herokuapp.com/api/topics')
    .then((res) => {
      return res.data.topics;
    });
};
