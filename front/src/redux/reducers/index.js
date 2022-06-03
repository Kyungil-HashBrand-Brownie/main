import { combineReducers } from "redux";
import nftReducer from "./nftReducer";

// 객체가 들어간다
export default combineReducers({
    nft:nftReducer,
    
});