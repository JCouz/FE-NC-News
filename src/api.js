import axios from 'axios';

const API_BASE = 'https://jcouz-nc-news.herokuapp.com';

export const fetchArticles = (topic, sort_by, order) => {
  return axios
    .get(`${API_BASE}/api/articles`, {
      params: { topic: topic, sort_by: sort_by, order: order },
    })
    .then((res) => {
      return res.data.articles;
    });
};

export const fetchTopics = () => {
  return axios.get(`${API_BASE}/api/topics`).then((res) => {
    return res.data.topics;
  });
};

export const fetchArticlePage = (article_id) => {
  return axios.get(`${API_BASE}/api/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const updateArticle = (article_id, voteInc) => {
  return axios
    .patch(`${API_BASE}/api/articles/${article_id}`, { inc_votes: voteInc })
    .then((res) => {
      return res.data.article;
    });
};

export const fetchArticleComments = (article_id) => {
  return axios
    .get(`${API_BASE}/api/articles/${article_id}/comments`)
    .then((res) => {
      return res.data.comments;
    });
};

export const updateComment = (comment_id, voteInc) => {
  return axios
    .patch(`${API_BASE}/api/comments/${comment_id}`, { inc_votes: voteInc })
    .then((res) => {
      return res.data.comment;
    });
};

export const addComment = (article_id, newComment) => {
  return axios
    .post(`${API_BASE}/api/articles/${article_id}/comments`, newComment)
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  console.log(comment_id);
  return axios.delete(`${API_BASE}/api/comments/${comment_id}`);
};
