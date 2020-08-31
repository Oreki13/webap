import Axios from "axios";

export const postComment = (coment) => {
  return {
    type: "POST_COMEN",
    payload: Axios.post(process.env.REACT_APP_URL + "comment/add", coment),
  };
};
