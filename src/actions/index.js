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

export const UPDATE_ITEM_REQUEST = 'UPDATE_ITEM_REQUEST';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAILURE = 'UPDATE_ITEM_FAILURE';

export const fetchItems = itemType => dispatch => {
  dispatch({ type: FETCH_REQUEST });

  return axios
    .get(`https://xenono-react-blog-backend.herokuapp.com/${itemType}`)
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
      dispatch({ type: FETCH_FAILURE, errors: err });
    });
};

export const fetchAllItems = () => dispatch => {
  dispatch({ type: FETCH_REQUEST });
  const postsRequest = axios.get('https://xenono-react-blog-backend.herokuapp.com/posts');
  const tutorialsRequest = axios.get('https://xenono-react-blog-backend.herokuapp.com/tutorials');

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
      dispatch({ type: FETCH_FAILURE, errors: err });
    });
};

export const authenticateUser = (username, password) => dispatch => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post('https://xenono-react-blog-backend.herokuapp.com/getUser', {
      username,
      password,
    })
    .then(payload => {
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: AUTH_FAILURE, errors: err });
    });
};

export const addItem = (itemType, payload) => dispatch => {
  dispatch({ type: ADD_ITEM_REQUEST });

  return axios
    .post(`https://xenono-react-blog-backend.herokuapp.com/${itemType}/add`, payload)
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
      dispatch({ type: ADD_ITEM_FAILURE, errors: err });
    });
};

export const deleteItem = (itemType, itemId) => dispatch => {
  dispatch({ type: DELETE_ITEM_REQUEST });

  return axios
    .delete(`https://xenono-react-blog-backend.herokuapp.com/delete/${itemType}/${itemId}`)
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
      dispatch({ type: DELETE_ITEM_FAILURE, errors: err });
    });
};
export const updateItem = (itemType, item) => dispatch => {
  dispatch({ type: UPDATE_ITEM_REQUEST });

  return axios
    .put(`https://xenono-react-blog-backend.herokuapp.com/${itemType}/update/${item.id}`, item)
    .then(({ data }) => {
      dispatch({
        type: UPDATE_ITEM_SUCCESS,
        payload: {
          itemType,
          data,
        },
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_ITEM_FAILURE,
        errors: err,
      });
    });
};
