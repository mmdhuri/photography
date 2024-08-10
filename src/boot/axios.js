// src/boot/axios.js
import { boot } from "quasar/wrappers";
import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: "https://food-api-backend.onrender.com", // Your API base URL
  timeout: 10000, // Optional: Request timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default boot(({ app }) => {
  // For using axios globally in the application
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
