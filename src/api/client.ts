import axios from "axios";

const getApi = () => {
  return axios.create({
    baseURL: "https://mmphysio-api-437392143274.africa-south1.run.app/", // now always correct
    headers: {
      "X-API-KEY": "sGdl8A7GVOOKGuR4dFEVdFqMDED4pjCbAH0wj+nUsU8=",
      "Content-Type": "application/json",
    },
  });
};

export default getApi;

