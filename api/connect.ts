import axios from "axios";

const connect_Api = axios.create({
  baseURL: "https://api-json-server-products.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default connect_Api;
