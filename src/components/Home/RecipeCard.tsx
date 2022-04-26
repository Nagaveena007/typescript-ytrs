import "./Home.css";
import "../../components/Home/Home.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { loadCSS } from "fg-loadcss";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { addToCartAction } from "../../redux/action";

import { addToFavoAction, removeFromFavoAction } from "../../redux/action";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { RecipesData } from "../../types";
import { ReduxStore } from "../../types/ReduxStore";
import { Dispatch } from 'redux'

const useStyles = makeStyles((theme) => ({
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
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    /*  color: theme.palette.primary.light, */
    color: "white",
    fontSize: "large",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));
interface RecipeListProps {
  breakfast:RecipesData
  i:number
  // breakfast:ReduxStore['recipes']
  addToCartAction:(breakfast:RecipesData)=>void
/*   removeFromFavoAction:(breakfast:ReduxStore['like'])=>void
  addToFavoAction:(breakfast:ReduxStore['like'])=>void */
  
}

const RecipeCard = ({ breakfast, i }:RecipeListProps) => {
  const like = useSelector((s:ReduxStore) => s.like);
  /* const qty = useSelector(
    (state:ReduxStore) => state.cart.recipesToBuy.find((el) => el.i === i)?.qty
  ); */
  const [count, setCount] = React.useState(0);
  const dispatch:Dispatch = useDispatch();

  const isFav = like.likedRecipes.find((food) => food.id === breakfast.id);
  const toggleFavourite = () => {
    isFav
      ? dispatch(removeFromFavoAction(breakfast))
      : dispatch(addToFavoAction(breakfast));
  };

  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector<any>("#font-awesome-css")
    );

    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);
  return (
    <>
      <Grid>
        <Box marginRight={1.5} my={5} style={{ width: "18rem" }}>
          <ImageList className={classes.imageList}>
            <ImageListItem style={{ width: "100%" }}>
              <Link to={`/details/` + breakfast.id}>
                <img
                  src={breakfast.img}
                  alt={breakfast.name}
                  style={{ width: "18rem", height: 180 }}
                />
              </Link>
              <ImageListItemBar
                title={
                  <button className="actions__cartBtn">
                    {" "}
                    <Badge color="secondary" badgeContent={count}>
                      <AddShoppingCartIcon
                       style={{ width: "22px", height: "22px" }}
                        className="mr-2 "
                        onClick={() => {
                          dispatch(addToCartAction(breakfast));
                          setCount(count + 1);
                        }}
                      />
                    </Badge>
                  </button>
                }
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <button className="actions__heartBtn mr-3 ">
                    <>
                      {isFav ? (
                        <AiFillHeart
                          className=""
                          size={25}
                          color="#f50057"
                          onClick={toggleFavourite}
                        />
                      ) : (
                        <AiOutlineHeart
                          size={25}
                          className="heart-outline"
                          onClick={toggleFavourite}
                        />
                      )}
                    </>
                  </button>
                }
              />
            </ImageListItem>
          </ImageList>

          <Box pr={2}>
            <Box className="d-flex mt-3">
              <Avatar
                className="mr-3 "
                alt="Ted talk"
                src="/shetru-kitchen.jpg"
              />
              <Typography gutterBottom variant="body2">
                {breakfast.title}
              </Typography>
            </Box>
            <Box className="" style={{ marginLeft: "57px" }}>
              <Typography display="block" variant="body2" color="textSecondary">
                {breakfast.name}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Price: € {breakfast.price} • Cooking time:
                {breakfast.cookingTime} min
              </Typography>
           
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default RecipeCard;
