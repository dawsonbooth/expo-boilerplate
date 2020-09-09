import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import settings from "./settings";

// AsyncStorage.clear(); // FOR DEBUGGING

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    settings,
  })
);

export default rootReducer;
