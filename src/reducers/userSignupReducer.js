import {
 API_ITEMS_LOADING,

} from "../actions/types";

const initialState = {
 isLoading: false,
 user: {},
 userById: {
  id: ""
 }
};

export default (state = initialState, actions) => {
 switch (actions.type) {
  case API_ITEMS_LOADING:
   return { ...state, isLoading: true };


  default:
   return state;
 }
};