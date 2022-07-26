import { GET_CARDS, successAction } from "../types";
const initialState = {
  data: [],
};

export default function Cards(state = initialState, action) {
  switch (action.type) {
    case successAction(GET_CARDS):
      return {
        data: action.data,
      };

    default:
      return state;
  }
}
