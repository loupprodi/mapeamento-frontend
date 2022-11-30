import axios from "axios";
import env from "react-dotenv";

export const api = axios.create({
  baseURL: `${env.API_URL}`,
});
