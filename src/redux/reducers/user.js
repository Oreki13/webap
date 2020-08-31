const initialState = {
  users: [],
  usersGoogle: null,
  validate: [],
  detailUser: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false,
};
const users = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case "POST_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "POST_LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "POST_LOGIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        users: action.payload.data,
      };
    case "GET_TOKEN_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "GET_TOKEN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "GET_TOKEN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        validate: action.payload.data,
      };
    case "GET_TOKEN_GOOGLE_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "GET_TOKEN_GOOGLE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "GET_TOKEN_GOOGLE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        usersGoogle: action.payload.data.message,
      };
    case "GET_DETAIL_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "GET_DETAIL_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "GET_DETAIL_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        detailUser: action.payload.data,
      };

    default:
      return state;
  }
};

export default users;
