import axios from "axios";
import cookie from "cookie";

export const SECRET_KEY = process.env.NEXT_PUBLIC_KEY;

export const MODE = process.env.NEXT_PUBLIC_MODE;
const LOCAL = process.env.NEXT_PUBLIC_LOCAL_URL;
const TEST = process.env.NEXT_PUBLIC_TEST_URL;
const MAIN = process.env.NEXT_PUBLIC_MAIN_URL;

export const API_URL =
  MODE === "local"
    ? LOCAL
    : MODE === "test"
    ? TEST
    : MODE === "main"
    ? MAIN
    : "";


export const Axios = axios.create({
  baseURL: API_URL,
});


export const Cookie = cookie
export const Access = process.env.NEXT_PUBLIC_ACCESS;
export const Refresh = process.env.NEXT_PUBLIC_REFRESH;
