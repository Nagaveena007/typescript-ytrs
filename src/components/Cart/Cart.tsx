
import {  Container, Row } from "react-bootstrap";
import { getTotal } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";
import "./Cart.css";
import { ReduxStore } from "../../types/ReduxStore";
//import { RecipesData } from "../../types";

/* interface CartListProps {
  breakfast:RecipesData
  getTotal:(total: null)=>void
} */

const Cart = () => {
  const cartList = useSelector((state:ReduxStore) => state.cart.recipesToBuy);
  let total:number = cartList.reduce(
    (acc, currentValue) =>
      acc + parseFloat(currentValue.price) * currentValue.qty,
    0
  );
  const dispatch = useDispatch();

  return (
    <Container className="">
      <Row>
        <div className="cart">
          <div className="cart__items">
            {cartList.map((recipe, i) => (
              <>
                <CartCard breakfast={recipe} i={i} />
              </>
            ))}
          </div>

          <div className="cart__summary">
            <h4 className="summary__title">Cart Summary</h4>
            <div className="summary__price">
              <span>TOTAL: ({cartList.length} items)</span>
              <span>$ {total}</span>
            </div>
            {cartList.length !== 0 ? (
              <Link to="/checkout">
                <button
                  className="summary__checkoutBtn"
                  onClick={() => {
                    dispatch(getTotal(total));
                  }}
                >
                  Proceed To Checkout
                </button>
              </Link>
            ) : (
              <Link to="/">
                <button className="summary__checkoutBtn">
                  Add Items to cart
                </button>
              </Link>
            )}
          </div>
        </div>
     
      </Row>
    </Container>
  );
};

export default Cart;
