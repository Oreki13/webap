const initialState = {
  isLoading: true,
  isFulfielled: false,
  isRejected: false,
};

const comment = (state = initialState, action) => {
  switch (action.type) {
    case "POST_COMEN_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case "POST_COMEN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "POST_COMEN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
      };

    default:
      return state;
  }
};

export default comment;
