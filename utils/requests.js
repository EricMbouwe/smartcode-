import axios from 'axios';
const API_KEY = process.env.API_KEY;
const baseUrl = 'https://newsapi.ai/api/v1/';

export const fetchArticles = () => {
  return axios.post(baseUrl + 'article/getArticles', {
    query:
      '{"$query":{"lang":"eng"},"$filter":{"forceMaxDataTimeWindow":"31"}}',
    dataType: ['news'],
    resultType: 'articles',
    articlesSortBy: 'date',
    articlesCount: 100,
    articleBodyLen: -1,
    apiKey: API_KEY,
  });
};
