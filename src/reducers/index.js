import { combineReducers } from "redux";
import phonesReducer from "./phonesReducer";
import phonesPageReducer from "./phonesPageReducer";
import phonePageReducer from "./phonePageReducer";
import basketReducer from "./basketReducer";
import categoriesReducer from "./categoriesReducer";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) => combineReducers({
          phonesReducer,
          phonesPageReducer,
          phonePageReducer,
          basketReducer,
          categoriesReducer,
          router: connectRouter(history)
})

export default createRootReducer