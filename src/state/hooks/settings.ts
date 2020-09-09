import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { settings as actions } from "../actions";
import { State } from "../types";

export const useSettings = () => {
  const settings = useSelector((state: State) => state.settings);

  const dispatch = useDispatch();

  const setTheme = useCallback(
    (theme: State["settings"]["theme"]) => {
      dispatch({ type: actions.SET_THEME, theme });
    },
    [dispatch]
  );

  return { settings, setTheme };
};
