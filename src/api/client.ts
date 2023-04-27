import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001", // Replace this with the URL of your backend server
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
