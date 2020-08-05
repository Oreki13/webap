import { combineReducers } from "redux";
import artikel from "./artikel";
import user from "./user";
import kategori from "./kategori";

const rootReducers = combineReducers({
  artikel,
  user,
  kategori,
});

export default rootReducers;
