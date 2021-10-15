import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

function Explore() {
  return (
    <div className="explore">
      <Typography variant="p" component="h4" color="textSecondary">
        {" "}
        Explore my works
      </Typography>

      <IconButton className="explore1">
        <a href="#project" style={{ textDecoration: "none" }}>
          <ArrowDownwardIcon fontSize="large" />
        </a>
      </IconButton>
    </div>
  );
}

export default Explore;
