import { FETCH_SUCCESS, AUTH_SUCCESS, ADD_ITEM_SUCCESS } from 'actions';

const initialState = {
  posts: [],
  tutorials: [],
  isLogged: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLogged: action.payload.data,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    default:
      return state;
  }
};

export default rootReducer;
