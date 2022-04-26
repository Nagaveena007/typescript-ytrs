//import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Rating from "@material-ui/lab/Rating";
import { RecipesData } from "../../types";

/* const useStyles = makeStyles({
  root: {},
}); */
interface RecipeListProps {
  dish:RecipesData
  //adjustItemQty:(a:number, b:number)=>void
}
export default function Reviews({ dish }:RecipeListProps) {
  //const classes = useStyles();

  return (
    <>
      <div className={`mt-5 `}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          >
            <h5>Ingredients</h5>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{color:"black"}}>
              {dish.ingredients.map((recipe, i) => (
                <>
                  <p>
                    {recipe.items}- {recipe.quantity}
                    {recipe.unit}
                  </p>
                </>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions3-content"
            id="additional-actions3-header"
          >
            <h5>Method</h5>
          </AccordionSummary>

          <AccordionDetails>
            <Typography color="textSecondary">{dish.method}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions2-content"
            id="additional-actions2-header"
          >
            <h5>Comments</h5>
          </AccordionSummary>
          <AccordionDetails>
            <Typography >

              {dish.comments.map((recipe, i) => (
                <>
                  <Rating name="simple-controlled" value={recipe.rating} />
                  <p>{recipe.comment}</p>
                </>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
