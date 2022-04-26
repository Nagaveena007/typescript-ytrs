
//import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../Cart/Cart.css";
import { ReduxStore } from "../../types/ReduxStore";
const StyledBadge = withStyles((theme) => ({
  badge: {
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Badge);
const CartIndicator = () => {
  const navigate = useNavigate();

  const cartLength = useSelector((state:ReduxStore) => state.cart.recipesToBuy.length);
  //const qty = useSelector((state:ReduxStore) => state.cart.recipesToBuy.qty);

  //const dispatch = useDispatch();

  return (
    <>
      <div className="" onClick={() => navigate("/cart")}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cartLength} color="secondary">
            <ShoppingCartIcon
              style={{ width: "32px", height: "38px", color: "#707070" }}
            />
          </StyledBadge>
        </IconButton>
      </div>
    </>
  );
};

export default CartIndicator;
