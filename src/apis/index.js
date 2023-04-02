import { SERVER_URL } from "./../config";
import axios from "axios";

export const login = (apiArgs = { email: "", password: "" }) =>
  axios.post(`${SERVER_URL}/auth/signin`, apiArgs);
