import { combineReducers } from "redux";
import allDataCardReducer from "../getCard/reducer";

const rootReducer = combineReducers({
    dataCard: allDataCardReducer,
    //for another reducerss
    dataCardOne:allDataCardReducer
});

export default rootReducer;