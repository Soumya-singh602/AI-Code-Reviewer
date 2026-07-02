import axios from "axios";

export const reviewCode = (code) => {
  return axios.post("http://localhost:8000/api/review/", {
    code,
  });
};