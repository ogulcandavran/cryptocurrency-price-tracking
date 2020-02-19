import { FETCHCOINDETAILS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCHCOINDETAILS:
      return action.payload;
    default:
      return state;
  }
};
