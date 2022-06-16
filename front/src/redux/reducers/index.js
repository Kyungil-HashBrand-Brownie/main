import { combineReducers } from "redux";
import nftReducer from "./nftReducer";
import testReducer from "./testReducer";

// 객체가 들어간다
export default combineReducers({
    nft:nftReducer,
    testnft:testReducer,
});