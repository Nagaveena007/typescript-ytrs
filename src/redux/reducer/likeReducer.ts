import { AnyAction } from "redux";
import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../action";
import { initialState } from "../store";

const likeReducer = (state = initialState.like, action:AnyAction) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        likedRecipes: [...state.likedRecipes, action.payload],
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        likedRecipes: state.likedRecipes.filter(
          (food) => food !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default likeReducer;
