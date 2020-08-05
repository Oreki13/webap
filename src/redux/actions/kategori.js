import Axios from "axios";

export const listKategori = () => {
  return {
    type: "GET_KATEGORI",
    payload: Axios.get(process.env.REACT_APP_URL + "kategori/get"),
  };
};
export const searchKategori = (param) => {
  return {
    type: "GET_KATEGORI_SEARCH",
    payload: Axios.get(process.env.REACT_APP_URL + "kategori/search/" + param),
  };
};
export const createKategori = (param) => {
  return {
    type: "POST_KATEGORI",
    payload: Axios.post(process.env.REACT_APP_URL + "kategori/add", param),
  };
};
