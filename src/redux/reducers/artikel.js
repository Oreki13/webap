const initialState = {
  artikel: [],
  filter_visit: [],
  byId: [],
  other: [],
  isLoading: true,
  isFulfielled: false,
  isRejected: false,
};
const artikel = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case "GET_ARTIKEL_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "GET_ARTIKEL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "GET_ARTIKEL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        artikel: action.payload.data,
      };
    case "GET_ARTIKEL_FILL_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "GET_ARTIKEL_FILL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "GET_ARTIKEL_FILL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        filter_visit: action.payload.data,
      };
    case "GETID_ARTIKEL_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "GETID_ARTIKEL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "GETID_ARTIKEL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        byId: action.payload.data,
      };
    case "EDIT_ARTIKEL_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "EDIT_ARTIKEL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "EDIT_ARTIKEL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        other: action.payload.data,
      };
    case "POST_ARTIKEL_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "POST_ARTIKEL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "POST_ARTIKEL_FULFILLED":
      const before = state.artikel.message;
      before.push(action.payload.data);
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        other: action.payload.data,
      };

    default:
      return state;
  }
};

export default artikel;
