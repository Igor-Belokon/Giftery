import { CHOOSE_CATEGORIE, successAction } from "../types";
const initialState = {
  data: 0,
};

export default function chooseCategorie(state = initialState, action) {
  switch (action.type) {
    case successAction(CHOOSE_CATEGORIE):
      console.log({ action, nn: Number(action.data) });
      return {
        ...state,
        data: Number(action.data),
      };

    default:
      return state;
  }
}
