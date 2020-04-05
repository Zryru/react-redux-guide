import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter((x) => x.id !== action.payload.id);
  return updateObject(state, {
    results: updatedArray,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.payload.result,
        }),
      });
    case actionTypes.DELETE_RESULT:
      deleteResult(state, action);
      break;
    default:
      return state;
  }
};

export default reducer;
