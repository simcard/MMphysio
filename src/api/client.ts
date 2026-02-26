import axios from "axios";

const getApi = () => {
  return axios.create({
    baseURL: "https://mmphysio-api-437392143274.africa-south1.run.app/", // now always correct
    headers: {
      "X-API-KEY": process.env.VITE_API_KEY || "",
      "Content-Type": "application/json",
    },
  });
};

export default getApi;

