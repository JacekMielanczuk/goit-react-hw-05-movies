import axios from 'axios';

const API_KEY = 'bd1f74544935b756e43565ea50ae79a5';

const BASE_URL = 'https://api.themoviedb.org';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const getData = url => {
  try {
    return instance.get(`/${url}`);
  } catch (error) {
    console.log(error);
  }
};

export default API_KEY;
