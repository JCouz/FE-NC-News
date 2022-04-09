import axios from "axios";

export const fetchArticles = (topic, sort_by, order) => {
  return axios
    .get("https://nc-news-example-seminar-3-9.herokuapp.com/api/articles", {
      params: { topic: topic, sort_by: sort_by, order: order },
    })
    .then((res) => {
      return res.data.articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://nc-news-example-seminar-3-9.herokuapp.com/api/topics")
    .then((res) => {
      return res.data.topics;
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
