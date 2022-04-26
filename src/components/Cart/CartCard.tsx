
import { removeFromCartAction } from "../../redux/action";
import "./Cart.css";
import React from "react";
//import { makeStyles } from "@material-ui/core/styles";

//import { red } from "@material-ui/core/colors";
import { loadCSS } from "fg-loadcss";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../components/Home/Home.css";
import { adjustItemQty } from "../../redux/action";
//import { RecipesData } from "../../types";
import { ReduxStore } from "../../types/ReduxStore";
import { CartData } from "../../types/cart";

/* const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    "& > .fa": {
      margin: theme.spacing(2),
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  card__deco: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
})); */
interface RecipeListProps {
  breakfast:CartData
  i:number

}
/* interface IButton{	
	variant: string;
   color: string; 
   size: string; 
   className: string;
    onClick: () => void; 
  } */

const CartCard = ({ breakfast, i }:RecipeListProps ) => {
  const dispatch = useDispatch();
  const qty = useSelector((state:ReduxStore) => state.cart.recipesToBuy[i].qty);
  //const classes = useStyles();

  React.useEffect(():any => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css") as HTMLElement 
      //Argument of type 'Element | null' is not assignable to parameter of type 'HTMLElement | undefined'.
     // errors like this can be resolved casting your element to the expected type
    );

    return () => {
      node.parentNode!.removeChild(node);/* 
      happen because the parentNode could be null and so .removeChild could break the app
if you're sure that the parentNode will never miss, you can use a ! (a "Non-Null Assertion Operator") 
for telling TypeScript to not worry about it */
    };
  }, []);
  return (
    <>
      <div className="cartItem" >
        <img className="cartItem__image" src={breakfast.img} alt={breakfast.img} />
        <div className="cartItem__details">
          <p className="details__title">{breakfast.name}</p>
          <p className="details__desc">{`Cooking time: ${breakfast.cookingTime} min`}</p>
          <p className="details__price">$ {breakfast.price}</p>
        </div>
        <div className="cartItem__actions">
          <div className="cartItem__qty">
            <label htmlFor="qty">Qty</label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={qty}
              onChange={(e) => {
                //setInput(e.target.value);
                dispatch(adjustItemQty(breakfast.id, e.target.value));
              }}
            />
          </div>

          <button 
           /*  variant="contained"
            color="secondary"
            size="small" */
            className={`actions__deleteItemBtn ml-5`}
            onClick={() => {
              dispatch(removeFromCartAction(i));
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
