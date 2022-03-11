import axios from 'axios';

export const fetchArticles = (topic) => {
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

export const updateArticle = (article_id, voteInc) => {
  return axios
    .patch(
      `https://nc-news-example-seminar-3-9.herokuapp.com/api/articles/${article_id}`,
      { inc_votes: voteInc }
    )
    .then((res) => {
      return res.data.article;
    });
};

export const fetchArticleComments = (article_id) => {
  return axios
    .get(
      `https://nc-news-example-seminar-3-9.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then((res) => {
      return res.data.comments;
    });
};

export const updateComment = (comment_id, voteInc) => {
  return axios
    .patch(
      `https://nc-news-example-seminar-3-9.herokuapp.com/api//comments/${comment_id}`,
      { inc_votes: voteInc }
    )
    .then((res) => {
      return res.data.comments;
    });
};

export const addComment = (article_id, newComment) => {
  return axios
    .post(
      `https://nc-news-example-seminar-3-9.herokuapp.com/api/articles/${article_id}/comments`,
      newComment
    )
    .then((res) => {
      return res.data.comment;
    });
};
