import axios from "axios";
import { difficulty, quizType } from "../types";

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
