import { combineReducers } from "redux";
import categories from "./categories";
import gifts from "./cards";
import chooseCategorie from "./chooseCategorie";

export default combineReducers({
  categories,
  gifts,
  chooseCategorie,
});
