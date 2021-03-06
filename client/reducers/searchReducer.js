import { SEARCH_ADDRESS } from '../constants/actionTypes';

const initialState = {
  address_search: '',
  previous_searches: [],
  current_results: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ADDRESS:
      return {
        ...state,
        address_search: action.payload.address_search,
        previous_searches: [...state.previous_searches, action.payload.address_search],
        current_results: action.payload.current_results,
      };
    default:
      return state;
  }
};

export default searchReducer;
