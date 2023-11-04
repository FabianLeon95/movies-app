import axios from "axios";
import { ACCESS_TOKEN, API_BASE_URL } from "./constants";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const authorizedGetRequest = async (endpoint) => {
  const response = await axiosInstance.get(encodeURI(endpoint), {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  return response.data;
};

export { authorizedGetRequest };
