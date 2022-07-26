import {
  GET_CATEGORIES,
  CHOOSE_CATEGORIE,
  GET_CARDS,
  successAction,
  failureAction,
} from "../types";
export function loadCategories() {
  return (dispatch) =>
    fetch("https://giftery.strateg.link/public/api/get_categories") // Redux Thunk handles these
      .then((res) => res.json())
      .then((data) => dispatch({ type: successAction(GET_CATEGORIES), data }))
      .catch((err) => dispatch({ type: failureAction(GET_CATEGORIES), err }));
}
export function loadGifts() {
  return (dispatch) =>
    fetch("https://giftery.strateg.link/public/api/get_products") // Redux Thunk handles these
      .then((res) => res.json())
      .then((data) => dispatch({ type: successAction(GET_CARDS), data }))
      .catch((err) => dispatch({ type: failureAction(GET_CARDS), err }));
}
export function postCards(card) {
  console.log(card);
  return (dispatch) =>
    fetch("http://localhost:8089/api/card", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(card),
    });
}

export function chouseCategoie(answer) {
  return { type: successAction(CHOOSE_CATEGORIE), data: answer };
}
