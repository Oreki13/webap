const initialState = {
  listKategori: [],
  listSearch: [],
  isLoading: true,
  isFulfielled: false,
  isRejected: false,
};

const kategori = (state = initialState, action) => {
  switch (action.type) {
    case "GET_KATEGORI_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "GET_KATEGORI_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "GET_KATEGORI_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        listKategori: action.payload.data,
      };
    case "GET_KATEGORI_SEARCH_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "GET_KATEGORI_SEARCH_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "GET_KATEGORI_SEARCH_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        listSearch: action.payload.data,
      };
    case "POST_KATEGORI_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "POST_KATEGORI_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "POST_KATEGORI_FULFILLED":
      const res = action.payload.data.message;
      const datas = state.listSearch.message;
      console.log(datas.message);
      console.log(res);
      datas.push(res);
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        // listSearch: datas,
      };
    default:
      return state;
  }
};

export default kategori;
