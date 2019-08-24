import { GET_PLACES, SET_VISIBILITY } from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_PLACES:
      return {
        ...state,
        places: action.payload
      };
    case SET_VISIBILITY:
      return {
        ...state,
        isVisible: action.payload
      };
  }
};
