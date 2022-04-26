import { Dispatch } from 'redux'
import { RecipesData } from "../../types";


 export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_USER_NAME = "SET_USER_NAME";
export const GET_RECIPES = "GET_RECIPES";
export const SET_TOTAL = "SET_TOTAL";
export const SEARCH_QUERY = "SEARCH_QUERY";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const CLEAR_CART = "CLEAR_CART";
export const ADJUST_ITEM_QTY = "ADJUST_ITEM_QTY";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";
export const ADMIN_PRODUCT_FAIL = "ADMIN_PRODUCT_FAIL";
export const ADMIN_PRODUCT_REQUEST = "ADMIN_PRODUCT_REQUEST";
export const ADMIN_PRODUCT_SUCCESS = "ADMIN_PRODUCT_SUCCESS";
export const REMOVE_FROM_ORDER = "REMOVE_FROM_ORDER";
export const ADD_TO_ORDER = "ADD_TO_ORDER";
export const GET_ORDERS = "GET_ORDERS";
export const ADD_ORDERS = "ADD_ORDERS";

export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
export const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING"; 

export const addToCartAction = (food:RecipesData) => ({
  type: ADD_TO_CART,
  payload: food,
});
export const removeFromCartAction = (index:number) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});
export const addToOrderAction = (arrayOfFoods:RecipesData) => ({
  type: ADD_TO_ORDER,
  payload: arrayOfFoods,
});

export const removeFromOrderAction = (index:number) => ({
  type: REMOVE_FROM_ORDER,
  payload: index,
});

export const adjustItemQty = (id:number, qty:any) => ({
  type: ADJUST_ITEM_QTY,
  payload: {
    id,
    qty,
  },
});

export const addToFavoAction = (food:RecipesData) => ({
  type: ADD_TO_FAV,
  payload: food,
});
export const removeFromFavoAction = (food:RecipesData) => ({
  type: REMOVE_FROM_FAV,
  payload: food,
});
export const clearCart = () => ({
  type: CLEAR_CART,
});
export const setUserName = (name:string) => ({
  type: SET_USER_NAME,
  payload: name,
});
export const getTotal = (total:number) => ({
  type: SET_TOTAL,
  payload: Number(total),
});

export const getRecipesAction = () => {
  return async (dispatch:Dispatch) => {
    dispatch({
      type: GET_PRODUCTS_LOADING,
      payload: true,
    });
    try {
      const resp = await fetch(
        "https://my-database-ytrs.herokuapp.com/recipes"
        //"http://localhost:3000/recipes"
        //"https://api.airtable.com/v0/appTaPWT8FuYGIzGm/Recipes?api_key=keyAS1qqs37KlnJBF"
      );
      if (resp.ok) {
        const food = await resp.json();
        console.log("main object", food);
        //const arrayOfRecipes = food.records.map((el) => el.fields);
        dispatch({
          type: GET_RECIPES,
          payload: food,
        });
        dispatch({
          type: GET_PRODUCTS_ERROR,
          payload: false,
        });
        dispatch({
          type: GET_PRODUCTS_LOADING,
          payload: false,
        });
      } else {
        console.log("error");
        dispatch({
          type: GET_PRODUCTS_ERROR,
          payload: true,
        });
        dispatch({
          type: GET_PRODUCTS_LOADING,
          payload: false,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: true,
      });
      dispatch({
        type: GET_PRODUCTS_LOADING,
        payload: false,
      });
    }
  };
};
export const getOrdersAction = () => {
  return async (dispatch:Dispatch) => {
    try {
      const resp = await fetch("https://my-database-ytrs.herokuapp.com/orders");
      if (resp.ok) {
        const food = await resp.json();
        console.log("main object", food);
        dispatch({
          type: GET_ORDERS,
          payload: food,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const addOrdersAction = (order:RecipesData) => {
  return async (dispatch:Dispatch) => {
    try {
      const response = await fetch(
        `https://my-database-ytrs.herokuapp.com/orders`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(order),
          // body: JSON.stringify({ title: `POST request` }),
        }
      );
      if (response.ok) {
        const food = await response.json();
        dispatch({
          type: ADD_ORDERS,
          payload: food,
        });
        console.log("Successfully added new Order");
        // <Alert severity="success">Successfully added new Order</Alert>;
      }
    } catch (e) {
      console.log(e);
    }
  };
};
