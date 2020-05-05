import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ALL_SUCCESS = 'FETCH_ALL_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const fetchItems = itemType => dispatch => {
  dispatch({ type: FETCH_REQUEST });

  return axios
    .get(`http://localhost:8081/${itemType}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          itemType,
          data,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const fetchAllItems = () => dispatch => {
  dispatch({ type: FETCH_REQUEST });
  const postsRequest = axios.get('http://127.0.0.1:8081/posts');
  const tutorialsRequest = axios.get('http://127.0.0.1:8081/tutorials');

  return axios
    .all([postsRequest, tutorialsRequest])
    .then(
      axios.spread((postsResponse, tutorialsResponse) => {
        const posts = postsResponse.data;
        const tutorials = tutorialsResponse.data;
        dispatch({
          type: FETCH_ALL_SUCCESS,
          payload: {
            posts,
            tutorials,
          },
        });
      }),
    )
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const authenticateUser = (username, password) => dispatch => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post('http://127.0.0.1:8081/getUser', {
      username,
      password,
    })
    .then(payload => {
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: AUTH_FAILURE });
    });
};

export const addItem = (itemType, payload) => dispatch => {
  dispatch({ type: ADD_ITEM_REQUEST });

  return axios
    .post(`http://127.0.0.1:8081/${itemType}/add`, payload)
    .then(({ data }) =>
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: {
          itemType,
          data,
        },
      }),
    )
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_ITEM_FAILURE });
    });
};

export const deleteItem = (itemType, itemId) => dispatch => {
  dispatch({ type: DELETE_ITEM_REQUEST });

  return axios
    .delete(`http://127.0.0.1:8081/delete/${itemType}/${itemId}`)
    .then(({ data }) =>
      dispatch({
        type: DELETE_ITEM_SUCCESS,
        payload: {
          itemType,
          itemId: data.id,
        },
      }),
    )
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_ITEM_FAILURE });
    });
};
