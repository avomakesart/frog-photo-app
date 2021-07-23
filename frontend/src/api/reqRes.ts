import axios from 'axios';

const KEY = 'bGVmDfBr7dO8soFVDZ759r-K7R5GEIJhjIZfhHWV7vo';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${KEY}`,
  },
});
