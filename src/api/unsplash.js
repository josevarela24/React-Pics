import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f432f55e521f042a7003b9816eb67ac781d6c62a105b5c4be8dded6c38745a74"
  }
});
