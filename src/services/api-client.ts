import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e3d4c38f8a1b499a9c5aa5b79cc68d48",
  },
});
