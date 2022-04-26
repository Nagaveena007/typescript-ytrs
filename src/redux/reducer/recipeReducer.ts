import {
  GET_RECIPES,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  ADMIN_PRODUCT_FAIL,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
} from "../action";
import { initialState } from "../store";
import { AnyAction } from "redux";

const recipesReducer = (state = initialState.recipes, action:AnyAction) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipesList: action.payload,
      };
    case GET_PRODUCTS_LOADING:
    case ADMIN_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ADMIN_PRODUCT_SUCCESS:
      return { loading: false, stock: action.payload };
    case GET_PRODUCTS_ERROR:
    case ADMIN_PRODUCT_FAIL:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default recipesReducer;
