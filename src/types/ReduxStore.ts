import { RecipesData } from "../types";
import { CartData } from "../types/cart";

export interface ReduxStore{
    cart: {
        recipesToBuy: CartData[],
      },
      recipes: {
        recipesList: RecipesData[],
        isError: false,
        isLoading: false,
      },
      orders: {
        ordersList: RecipesData[],
      },
      user: {
        userName: string,
      },
      total: {
        payment: null,
      },
      like: {
        likedRecipes: RecipesData[],
      },
}