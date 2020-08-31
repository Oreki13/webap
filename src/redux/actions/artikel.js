import Axios from "axios";

import qs from "querystring";

export const listArtikel = () => {
  return {
    type: "GET_ARTIKEL",
    payload: Axios.get(process.env.REACT_APP_URL + "artikel/get"),
  };
};

export const buatKamu = () => {
  return {
    type: "GET_ARTIKEL_FILL",
    payload: Axios.post(process.env.REACT_APP_URL + "artikel/getfil", {
      type: "visit",
    }),
  };
};
export const publishArtikel = (data) => {
  return {
    type: "POST_ARTIKEL",
    payload: Axios.post(process.env.REACT_APP_URL + "artikel/add", data),
  };
};
export const getByIdArtikel = (id) => {
  return {
    type: "GETID_ARTIKEL",
    payload: Axios.post(process.env.REACT_APP_URL + "artikel/getOne", {
      param: id,
    }),
  };
};
export const comenAdd = (data) => {
  return {
    type: "COMEN_ADD",
    dataComen: data,
  };
};
export const comenReply = (data) => {
  return {
    type: "COMEN_REPLY",
    dataComen: data,
  };
};
export const editArtikel = (id, data) => {
  return {
    type: "EDIT_ARTIKEL",
    payload: Axios.put(process.env.REACT_APP_URL + `artikel/${id}`, data),
  };
};
export const deleteArtikel = (id) => {
  return {
    type: "DELETE_ARTIKEL",
    payload: Axios.get(process.env.REACT_APP_URL + `artikel/delete/${id}`),
  };
};
export const artikelPilihan = () => {
  return {
    type: "ARTIKEL_PILIHAN",
    payload: Axios.get(process.env.REACT_APP_URL + `artikel/pilihan/`),
  };
};
