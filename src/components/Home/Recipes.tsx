import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiBadge-root": {
      marginRight: theme.spacing(4),
    },
  },
}));

export default function BadgeVisibility() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="">
      <div>
        <Badge color="secondary" badgeContent={count}>
          <AddShoppingCartIcon
            onClick={() => {
              setCount(count + 1);
            }}
          />
        </Badge>
        
      </div>
    </div>
  );
}
