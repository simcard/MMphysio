import axios from "axios";

const getApi = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL, // now always correct
    headers: {
      "X-API-KEY": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
  });
};

export default getApi;

