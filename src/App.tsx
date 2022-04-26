import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/Payment/CheckOut";
import { Container} from "react-bootstrap";
import Sidebar from "./components/Navbar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import LikedRecipes from "./components/LikedRecipes/LikedRecipes";
import DetailsPage from "./components/Details/DetailsPage";
import NotFound from "./components/NotFoundPage/NotFound";
import OrderSuccess from "./components/Payment/OrderSuccess";
import Profile from "./components/Profile/Profile";
import OrderDetails from "./components/OrderDetails/OrderDetails";
//import Register from "./components/Login/Register";
//import { useState } from "react";
//import LoginLayout from "./components/Login/LoginLayout";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function App() {
 // const [loggedIn, setloggedIn] = useState(false);

  /* function callbackFunction(childData:any) {
    setloggedIn(childData);
  } */
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <Container fluid className={classes.root}>
          <Sidebar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
            <Route path="/liked-Recipes" element={<LikedRecipes />} />
              <Route path="/details/:recipeId" element={<DetailsPage />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              {/* <Route path="/login" element={<LoginLayout />} />
              <Route path="/register" element={<Register />} /> */}

              <Route path="/account" element={<Profile />} />
              <Route path="/orders" element={<OrderDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
/* youtube-API-Key= "AIzaSyBAYCE_KG_1yDtWc5qGNPSi7jqfngrpMUY" */
