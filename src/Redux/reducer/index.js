import { TICKER, TICKERFAILED } from "../action/type";
import numberWithCommas from "../../Components/NumberwithComma";
const initialState = {
  lastPrice: 0,
  volume: 0,
  high: 0,
  low: 0,
  dailyChange: 0,
  dailyChangeRelative: 0,
};

export default function widgetReducer(state = initialState, action) {
  switch (action.type) {
    case TICKER:
      let relativeChange =
        action.payload[5] * 100 < 0
          ? (-1 *
              Math.round((action.payload[5] * 100 + Number.EPSILON) * 100)) /
            100
          : Math.round((action.payload[5] * 100 + Number.EPSILON) * 100) / 100;
      return {
        ...state,
        lastPrice: numberWithCommas(Math.round(action.payload[6])),
        volume: numberWithCommas(Math.round(action.payload[7])),
        high: numberWithCommas(Math.round(action.payload[8])),
        low: numberWithCommas(Math.round(action.payload[9])),
        
        dailyChange: action.payload[4],
        dailyChangeRelative: relativeChange,
      };
    case TICKERFAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
}


