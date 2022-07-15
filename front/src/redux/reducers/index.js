import { combineReducers } from "redux";
import nftReducer from "./nftReducer";
import mainReducer from "./mainReducer";
// 객체가 들어간다
export default combineReducers({
    nft:nftReducer,
    main:mainReducer,
});