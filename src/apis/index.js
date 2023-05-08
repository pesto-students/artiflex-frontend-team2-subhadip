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
  const { data, status } = await axios.get(`${SERVER_URL}/post/posts`, {
    headers,
    params: apiArgs,
  });

  if (status >= 200 && status < 300) {
    console.log("API request was successful!");
    console.log(data); // This will log the data returned from the API to the console.
  } else {
    console.error("API request failed!");
    console.error(data); // This will log the error message returned from the API to the console.
  }

  return data;
};

export { login, register, createPost, createPostForImage, getAllPosts };
