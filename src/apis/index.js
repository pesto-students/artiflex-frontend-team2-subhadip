import { SERVER_URL } from "./../config";
import axios from "axios";

const login = (apiArgs = { email: "", password: "" }) =>
  axios.post(`${SERVER_URL}/auth/signin`, apiArgs);

const register = (
  apiArgs = {
    first_name: "",
    last_name: "",
    email: "",
    mobile_no: "",
    password: "",
  }
) => axios.post(`${SERVER_URL}/auth/signup`, apiArgs);

const createPost = async (
  apiArgs = { title: "", description: "", post_type: "" }
) => {
  const accessToken = localStorage.getItem("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  const { data } = await axios.post(`${SERVER_URL}/post/create`, apiArgs, {
    headers,
  });

  return data;
};

const createPostForImage = async (
  apiArgs = { title: "", post_url: "", post_type: "" }
) => {
  const accessToken = localStorage.getItem("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  const { data } = await axios.post(`${SERVER_URL}/post/create`, apiArgs, {
    headers,
  });

  return data;
};

const getAllPosts = async (apiArgs = {}) => {
  const accessToken = localStorage.getItem("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  const { data } = await axios.post(`${SERVER_URL}/post/posts`, apiArgs, {
    headers,
  });

  return data;
};

export { login, register, createPost, createPostForImage, getAllPosts };
