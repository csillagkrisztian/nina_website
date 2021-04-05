import { findCountry } from "./actionHelpers";

export const SET_LOCATION = "SET_LOCATION";
export const SET_LOADING = "SET_LOADING";
export const SET_LANGUAGE = "SET_LANGUAGE";

// an action that has a payload (payloadAction)
export const plAction = (type, payload, dispatch) => {
  return {
    type,
    payload,
  };
};

// an action that only has type (typeAction)
export const tAction = (type) => {
  return {
    type,
  };
};

// an action that get's the location and sets the language of the website
export async function setLocation(dispatch, getState) {
  dispatch(plAction(SET_LOADING, true));
  const country = await findCountry();
  dispatch(plAction(SET_LOCATION, country));
  dispatch(plAction(SET_LANGUAGE, country.countryCode));
  dispatch(plAction(SET_LOADING, false));
}
