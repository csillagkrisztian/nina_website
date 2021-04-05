import { SET_LANGUAGE, SET_LOADING, SET_LOCATION } from "../actions/actions";

const initialState = {
  loading: false,
  location: {},
  language: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LANGUAGE: {
      switch (payload) {
        case "NL": {
          return { ...state, language: "dutch" };
        }
        default: {
          return { ...state, language: "english" };
        }
      }
    }
    case SET_LOCATION: {
      return { ...state, location: payload.countryCode };
    }
    case SET_LOADING: {
      return { ...state, loading: payload };
    }
    default:
      return state;
  }
};
