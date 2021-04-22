import { createStore } from "redux";

const initialState = {
  user: {},
  rejoj: {},
  activeTest: false,
  time: 0,
  typeTest: "",
  alumno: {},
};

function updateState(state = initialState, action) {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ALUMNO":
      return {
        ...state,
        alumno: action.payload,
      };
    case "TIPE":
      return {
        ...state,
        typeTest: action.payload,
      };
    case "TIME":
      return {
        ...state,
        time: action.payload,
      };
    case "TEST":
      return {
        ...state,
        activeTest: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
  /**
   * return state;
   */
}

const store = createStore(
  updateState
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
