export const initialState = {
  speed: null,
  text: null,
  count: null,
};

export function typingReducer(state = initialState, action) {
  switch (action.type) {
    case "TYPE":
      return {
        ...state,
        speed: action.speed,
        text: action.payload?.substring(0, state.text.length + 1),
      };
    case "DELAY":
      return {
        ...state,
        speed: action.payload,
      };
    case "DELETE":
      return {
        ...state,
        speed: action.speed,
        text: action.payload?.substring(0, state.text.length - 1),
      };
    case "COUNT":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}
