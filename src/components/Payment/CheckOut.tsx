//import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReduxStore } from "../../types/ReduxStore";
import { RecipesData } from "../../types";


/* interface CheckOutProps {
  i:number,
  totalPay:number,
  toal_payment:number,
  md:number,
  lg:number,
  sm:number,
  products:any,
} */

/* const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})); */


export default function Checkout(){
  let totalPay = useSelector((state:ReduxStore) => state.total.payment);
  const cartList = useSelector((state:ReduxStore) => state.cart.recipesToBuy);
  const [tip, setTip] = useState<number>(0);
 // const dispatch = useDispatch();

  //const classes = useStyles();
  let surcharge = 2.1;
  let delivery_fee = 1.8;
  /*   let totalPay = cartList.reduce(
    (acc, currentValue) => acc + parseFloat(currentValue.price),
    0
  ); */
  let toal_payment = Math.round(
    delivery_fee + totalPay + surcharge + tip
  ).toFixed(2);

 /*  const emptyCart = () => {
    localStorage.removeItem("cartItems");
  }; */
  let navigate = useNavigate();
  const handleToken = async (token:any) => {
    const response = await axios.post("http://localhost:8080/checkout", {
      //const response = await axios.post("http://stripe-api-ytrs.herokuapp.com", {
      token,
      toal_payment,
      cartList,
      /* product: { name: "test prd" }, */
    });
    console.log("response", response);
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      navigate("/order-success");
      // toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  };
  return (
    <>
      <Container  className=" mt-5">
        <Row>
          <Col md={12} /* sm={12} */>
            <div>
              <TextField
                id="filled-secondary"
                label="Any additional delivery note?"
                variant="filled"
                color="primary"
                style={{ width: "100%" }}
              />
              <div className="mt-5">
                <div>
                  <Typography gutterBottom variant="h5" component="h2">
                    Add a tip
                  </Typography>
                  <div className="my-2">
                    <Button
                      /* sm={12} */
                      className="mr-1"
                      variant="contained"
                      style={{ width: "15%" }}
                      onClick={() => {
                        setTip(2);
                      }}
                    >
                      € 2
                    </Button>
                    <Button
                      /* sm={12} */
                      className="mx-1"
                      variant="contained"
                      style={{ width: "15%" }}
                      onClick={() => {
                        setTip(4);
                      }}
                    >
                      € 4
                    </Button>
                    <Button
                      /* sm={12} */
                      className="mx-1"
                      variant="contained"
                      style={{ width: "15%" }}
                      onClick={() => {
                        setTip(6);
                      }}
                    >
                      € 6
                    </Button>
                    <Button
                      /* sm={12} */
                      className="mx-1"
                      variant="contained"
                      style={{ width: "15%" }}
                      onClick={() => {
                        setTip(8);
                      }}
                    >
                      € 8
                    </Button>
                    <Button
                      /* sm={12} */
                      className="ml-1"
                      variant="contained"
                      style={{ width: "15%" }}
                      onClick={() => {
                        setTip(10);
                      }}
                    >
                      € 10
                    </Button>

                    <div className="mt-2" style={{ color: "green" }}>
                      <strong> Our riders recive 100% of your tip</strong>
                    </div>
                  </div>
                </div>
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="h6"
                className="mt-5"
              >
                Order summary
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                <div /* sm={12} */ className="card" style={{ width: "100%" }}>
                  <ul className="list-group list-group-flush ">
                    <li /* sm={12} */ className="list-group-item d-flex">
                      <small>SUBTOTAL </small>
                      <small className="ml-auto">{totalPay} EUR</small>
                    </li>
                    <li /* sm={12} */ className="list-group-item d-flex">
                      <small> DELIVERY FEE</small>
                      <small className="ml-auto">{delivery_fee} EUR</small>
                    </li>

                    <li /* sm={12} */ className="list-group-item d-flex">
                      <small>SURCHARGE FOR ORDERS UNDER 15.00 EUR</small>
                      <small className="ml-auto">{surcharge} EUR</small>
                    </li>
                    <li /* sm={12} */ className="list-group-item d-flex">
                      <small>
                        <strong>TOTAL</strong>
                      </small>
                      <small className="ml-auto">{toal_payment} EUR</small>
                    </li>
                  </ul>
                </div>
              </Typography>
              <div /* sm={12} */ className="justify-content-center">
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h2"
                >
                  ADD COUPON
                </Typography>

                <StripeCheckout
                  stripeKey="pk_test_51KSjz0EcIioZXTXKo4xyhU5Y1HoNIOVXBRKjy5fxcZ7TFEyQ7eCCwp7SeS2rMJQNmYnUYQfP6ZsFZzZXCQt8P9Bd00plTWBxMc"
                  token={handleToken}
                  name="Shipping Details"
                  products={cartList}
                  Payment={toal_payment * 100}
                  billingAddress
                  shippingAddress
                  /*  dispatch(createOrder(cartList)) */
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
