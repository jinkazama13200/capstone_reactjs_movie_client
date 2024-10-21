import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn",
  // headers: {
  //   TokenCybersoft:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MiIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMDcyMDAwMDAwMCIsIm5iZiI6MTY4MTE0NjAwMCwiZXhwIjoxNzEwODY3NjAwfQ.m06_MDnk8Iecyg24D9-3tgZDQA5I2NK8OBNVISQpnlc",
  // },
});

fetcher.interceptors.request.use((request) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user) {
    request.headers.Authorization = `Bearer ${user.accessToken}`;
  }
  return request;
});

fetcher.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("currentUser");
      window.location.replace("/sign-in");
    }
    return Promise.reject(error);
  }
);

export default fetcher;
