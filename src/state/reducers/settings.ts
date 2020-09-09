import { settings as actions } from "../actions";
import { State, Action } from "../types";

const initialState: State["settings"] = {
  theme: "no-preference",
};

function settings(state = initialState, action: Action) {
  switch (action.type) {
    case actions.SET_THEME:
      return {
        ...state,
        ...{ theme: action.theme },
      };
    default:
      return state;
  }
}

export default settings;
