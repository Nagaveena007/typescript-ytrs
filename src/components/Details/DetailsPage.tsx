import { Container } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

import Button from "@material-ui/core/Button";
import ReactPlayer from "react-player";
import { addToCartAction } from "../../redux/action";
import Reviews from "./Reviews";
import { adjustItemQty } from "../../redux/action";

import "./Details.css";
import { RecipesData } from "../../types";
import { ReduxStore } from "../../types/ReduxStore";
import { CartData } from "../../types/cart";

const DetailsPage = () => {
  const params = useParams();
  let recipeId:any = params.recipeId;
  let id:number = parseInt(recipeId);

  const [dish, setDish] = useState<RecipesData |undefined>(undefined);

  const recipes = useSelector((state:ReduxStore) => state.recipes.recipesList);
  console.log("recipesss", recipes);
  const qty = useSelector(
    (state:CartData) => state.cart.recipesToBuy.find((el: { id: number; }) => el.id === id)?.qty
  );
  console.log("QTY", qty);
  // {dish.comments[id].rating}

  const dispatch = useDispatch();

  useEffect(() => {
    let recipesToShow = recipes.find((d) => d.id.toString() === recipeId);
    setDish(recipesToShow);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let sum = 0;
  {
    dish?.comments.map((number) => {
      return (sum += number.rating);
    });
  }
  const average = sum / dish?.comments.length;
  //console.log("average", average);
  return (
    <Container>
      {dish ? (
        <>
          <Row className="mt-2">
            <Col md={8}>
              <Card
                className=""
                style={{
                  width: "100vh",
                  height: "60vh",
                }}
              >
                <ReactPlayer
                  className="player-wrapper"
                  url={dish.url}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </Card>
            </Col>
            <Col md={4}>
              <div className="card-body">
                <h3 className="card-title">{dish.name}</h3>
                <p>
                  <b className="text-success">In stock</b>
                </p>
                <Box
                  className="d-flex"
                  component="fieldset"
                  borderColor="transparent"
                >
                  <Rating name="half-rating" precision={0.5} value={average} />

                  <h6 className="ml-2 mt-1 ">
                    {dish.comments.length} ( Reviews)
                  </h6>
                </Box>
                <hr></hr>
                <div className="d-flex">
                  <h5>Price:</h5>
                  <h4 className="pricedetail ml-2 text-danger">
                    {" "}
                    € {dish.price}
                  </h4>
                </div>
                <br />

                <h5 className="mr-2 mt-2" style={{ fontSize: "20px" }}>
                  Quantity:
                </h5>
                <div className="cartItem__qty">
                  <label htmlFor="qty">Qty</label>
                  <input
                    min="1"
                    type="number"
                    id="qty"
                    name="qty"
                    value={qty}
                    onChange={(e) => {
                      dispatch(adjustItemQty(id, e.target.value));
                    }}
                  />
                </div>
                {console.log(dish.ingredients)}
                <p className="card-text">
                  <br />
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className="mt-2"
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => {
                      dispatch(addToCartAction(dish));
                    }}
                  >
                    Add to cart
                  </Button>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Reviews dish={dish} />
          </Row>
        </>
      ) : (
        <h2>404 - Dish not found</h2>
      )}
    </Container>
  );
};

export default DetailsPage;
