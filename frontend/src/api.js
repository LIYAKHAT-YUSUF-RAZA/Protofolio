// src/api.js
import axios from "axios";

// ✅ Auto-switch between local (dev) and production (Render)
const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://protofolio-r34i.onrender.com" // Render backend
      : "http://127.0.0.1:8000", // Local dev
});

export default API;
