import axios from "axios";
import { API_DELIMETER, BASE_URL } from "./url";

export const Axios = axios.create({ baseURL: `${BASE_URL}${API_DELIMETER}` });
