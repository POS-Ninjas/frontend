import axios from "axios";

console.log(process.env)

const baseService = axios.create({
  baseURL: process.env.NUXT_API_BASE_URL || process.env.API_BASE_URL || "http://localhost:5000" as string
});

const API_ROUTES = {
  LOGIN: "/login",
  SIGNUP: "/users/signup",
  RESET_PASSWORD: "/users/reset-password",
  PRODUCTS: "/products",
  CATEGORIES: "/categories",
}

export {
  baseService,
  API_ROUTES,
};
