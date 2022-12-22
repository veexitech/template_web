import { combineReducers } from "redux";

import todos from "./todos";
import auth from './auth'
import construction from './construction'
import parameters from './parameters'

export default combineReducers({
  todos,
  auth,
  construction,
  parameters
});
