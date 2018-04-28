import * as TYPE from './actions';


const initialState = {
  threads: [],
  isLoading: false,
  errorMessage: null
};

const THREADS_LOAD_REQUEST = 'forum-app/THREADS_LOAD_REQUEST';

const THREADS_LOAD_SUCCESS = 'forum-app/THREADS_LOAD_SUCCESS';

const THREADS_LOAD_FAILURE = 'forum-app/THREADS_LOAD_FAILURE';


export default (state = initialState, action) => {
  switch (action.type) {

    case TYPE.LOAD_THREADS_REQUEST:
    
      return state;

    case TYPE.LOAD_THREADS_SUCCES:

      return state;

    case TYPE.LOAD_THREADS_FAILURE:

      return state;

    default:
      return state;

  }

};