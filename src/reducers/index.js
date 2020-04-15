import { FETCH_SUCCESS, AUTH_SUCCESS } from 'actions';

const initialState = {
  posts: [],
  tutorials: [],
  isLogged: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        isLogged: action.payload.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
