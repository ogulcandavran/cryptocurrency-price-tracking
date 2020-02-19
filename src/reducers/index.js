import { combineReducers } from "redux";
import dummy from './dummy';
import coinDetailReducer from './coinDetailReducer'

export default combineReducers({
  dummyData: dummy,
  coinDetail: coinDetailReducer
});