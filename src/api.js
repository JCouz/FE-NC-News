import axios from 'axios';

export const fetchArticles = () => {
  return axios
    .get('https://nc-news-example-seminar-3-9.herokuapp.com/api/articles')
    .then((res) => {
      return res.data.articles;
    });
};
