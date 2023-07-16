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
  apiArgs = {
    title: "",
    description: "",
    post_url: "",
    post_type: "",
    for_sell: "",
    post_price: "",
  }
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
    console.log("API request getAllPost was successfull!");
    // console.log(data); // This will log the data returned from the API to the console.
  } else {
    console.error("API request getAllPost failed!");
    // console.error(data); // This will log the error message returned from the API to the console.
  }

  return data;
};

const getOnePosts = async (apiArgs = { id: "" }) => {
  const { id } = apiArgs;
  const accessToken = localStorage.getItem("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  try {
    const { data, status } = await axios.get(`${SERVER_URL}/post/post/${id}`, {
      headers: headers,
    });

    if (status >= 200 && status < 300) {
      console.log("API request getOnePosts was successfull!");
      // console.log(data); // This will log the data returned from the API to the console.
    } else {
      console.error("API request getOnePosts failed!");
      // console.error(data); // This will log the error message returned from the API to the console.
    }

    return data;
  } catch (error) {
    console.error("API request failed!", error);
    throw error;
  }
};

const getPostBasedOnUser = async (apiArgs = { user_id: "" }) => {
  const accessToken = localStorage.getItem("accessToken");
  const headers = { Authorization: `Bearer ${accessToken}` };
  // const { data, status } = await axios.post(`${SERVER_URL}/post/post/query`, {
  //   headers,
  //   params: apiArgs,
  // });

  const { data, status } = await axios.post(
    `${SERVER_URL}/post/posts/byuserid`,
    apiArgs,
    {
      headers,
    }
  );

  if (status >= 200 && status < 300) {
    console.log("API request getAllPost based on user was successfull!");
    // console.log(data); // This will log the data returned from the API to the console.
  } else {
    console.error("API request getAllPost failed!");
    // console.error(data); // This will log the error message returned from the API to the console.
  }

  return data;
};

export {
  login,
  register,
  createPost,
  createPostForImage,
  getAllPosts,
  getOnePosts,
  getPostBasedOnUser,
};
