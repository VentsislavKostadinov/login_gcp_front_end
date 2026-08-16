import axios from "axios";
import { configure } from "axios-hooks";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACK_END_URL,
});

configure({ axios: axiosClient });
