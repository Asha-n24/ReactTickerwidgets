import { TICKER, TICKERFAILED } from "./type";

export  const updateWidget = (data) => async (dispatch) => {
  try {
    dispatch({
      type: TICKER,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type:TICKERFAILED,
    });
  }
};
