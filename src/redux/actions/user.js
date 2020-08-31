import Axios from "axios";

export const login = (body) => {
  console.log(body);
  return {
    type: "POST_LOGIN",
    payload: Axios.post(process.env.REACT_APP_URL + "users/login", body),
  };
};

export const checkToken = (token) => {
  return {
    type: "GET_TOKEN",
    payload: Axios.get(
      process.env.REACT_APP_URL + "users/auth/" + token,

      {
        headers: { authorization: "soul" },
      }
    ),
  };
};
export const checkTokenGoogle = (token) => {
  return {
    type: "GET_TOKEN_GOOGLE",
    payload: Axios.post(
      process.env.REACT_APP_URL + "users/auth/google",
      { token: token },
      {
        headers: { authorization: "soul" },
      }
    ),
  };
};
export const detailUser = (id) => {
  return {
    type: "GET_DETAIL_USER",
    payload: Axios.get(
      process.env.REACT_APP_URL + "users/" + id,

      {
        headers: { authorization: "soul" },
      }
    ),
  };
};
