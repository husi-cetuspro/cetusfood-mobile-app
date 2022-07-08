import axios from "axios";

const baseURL = "https://api.foodapp.academy.st.cetuspro.com";
export const api = axios.create({
    baseURL
})