import { combineReducers } from "redux";
import artikel from "./artikel";
import user from "./user";
import kategori from "./kategori";
import comment from "./comment";

const rootReducers = combineReducers({
  artikel,
  user,
  kategori,
  comment,
});

export default rootReducers;
