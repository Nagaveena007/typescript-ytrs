import RecipeCard from "./RecipeCard";
import { Container, Row } from "react-bootstrap";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRecipesAction } from "../../redux/action";

import Error from "../ErrorAlert/ErrorAlert";
import Loader from "../Loader/Loader";
import { ReduxStore } from "../../types/ReduxStore";
import { RecipesData } from "../../types";
/* interface RecepieStoreProps {
  //getRecipesAction: () => void
  recipes: ReduxStore['recipes']
} */
const Home = () => {
  const isError = useSelector((state:ReduxStore) => state.recipes.isError);
  const isLoading = useSelector((state:ReduxStore) => state.recipes.isLoading);
  const recipes = useSelector((state:ReduxStore) => state.recipes.recipesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container fluid className="">
        {isError ? (
          <Error />
        ) : isLoading ? (
          <Loader recipes={recipes} />
        ) : (
          <Row className="justify-content-start align-items-center">
            {recipes.map((b, i) => (
              <RecipeCard breakfast={b} key={b.id} i={i}  />
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Home;
