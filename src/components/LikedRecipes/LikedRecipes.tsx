//import React from "react";
import { Container, Row} from "react-bootstrap";
import { useSelector } from "react-redux";
import LikeCard from "./LikeCard";
import { Typography } from "@material-ui/core";
import { ReduxStore } from "../../types/ReduxStore";
import { RecipesData } from "../../types";
const LikedRecipes = () => {
  const like = useSelector((s: ReduxStore) => s.like.likedRecipes);

  return (
    <Container>
{/*       <h2 className="mt-5"></h2>
 */}      <Typography gutterBottom variant="h4">
        Favourite Recipes
      </Typography>
      {console.log("lIKED", like)}
      <Row>
        {like.map((breakfast:RecipesData, i: number)=> (
          <>
            <LikeCard
              breakfast={breakfast}
              key={breakfast.id}
              i={i} removeFromFavoAction={function (breakfast: RecipesData): void {
                throw new Error("Function not implemented.");
              } } addToFavoAction={function (breakfast: RecipesData): void {
                throw new Error("Function not implemented.");
              } }                      
              />
          </>
        ))}
      </Row>
    </Container>
  );
};

export default LikedRecipes;
