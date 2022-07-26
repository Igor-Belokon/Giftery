import { GET_CATEGORIES, successAction, failureAction } from "../types";
const initialState = {
  data: [],
};
export default function Categories(state = initialState, action) {
  switch (action.type) {
    case successAction(GET_CATEGORIES):
      return {
        data: action.data,
      };

    default:
      return state;
  }
}
