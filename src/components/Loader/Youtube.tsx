import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";

function YouTube() {
  return (
    <Grid container wrap="nowrap">
      <Box width={210} marginRight={0.5} my={5}>
        <Skeleton variant="rect" width={280} height={188} />
        <Box pt={0.5}>
          <Skeleton />
          <Skeleton width="80%" />
        </Box>
      </Box>
    </Grid>
  );
}

export default YouTube;
