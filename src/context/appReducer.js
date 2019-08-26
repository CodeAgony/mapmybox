import { GET_PLACES, FILTER_PLACES, SET_VISIBILITY, SET_POPUP } from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_PLACES:
      return {
        ...state,
        places: action.payload
      };

    case FILTER_PLACES:
      return {
        ...state,
        filteredPlaces:
          action.payload.length > 0 &&
          state.places.filter(place => {
            const regex = new RegExp(`${action.payload}`, `gi`);
            return place.text.match(regex) || place.place_name.match(regex);
          })
      };

    case SET_VISIBILITY:
      return {
        ...state,
        isVisible: action.payload
      };

    case SET_POPUP:
      return {
        ...state,
        popupData: action.payload
      };
  }
};
