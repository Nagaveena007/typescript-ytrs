import { AnyAction } from "redux";
import {  REMOVE_FROM_ORDER, ADD_ORDERS } from "../action";
import { initialState } from "../store";

const orderReducer = (state = initialState.orders, action:AnyAction) => {
  switch (action.type) {
    /*   case ADD_TO_ORDER:
      return {
        ...state,
        // ordersList: [...state.ordersList, action.payload],
        ordersList: [...state.ordersList, ...action.payload],
      }; */
    case ADD_ORDERS:
      return {
        ...state,
        ordersList: [...state.ordersList, ...action.payload],
      };

    case REMOVE_FROM_ORDER:
      return {
        ...state,
        ordersList: state.ordersList.filter((food, i) => i !== action.payload),
      };

    default:
      return state;
  }
};
export default orderReducer;
