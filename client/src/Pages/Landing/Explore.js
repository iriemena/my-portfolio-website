import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

function Explore() {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   // const att = e.target.getAttribute("href");
  //   // let doc = document.getElementById(att);
  //   // const Navheight = nav.current.getBoundingClientRect().height;
  //   // const position = doc.offsetTop - Navheight;
  //   // console.log(att);

  //   window.scrollTo({
  //     top: 500,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <div className="explore">
      <Typography variant="p" component="h4" color="textSecondary">
        {" "}
        Explore my works
      </Typography>

      <IconButton className="explore1">
        <a
          href="#project"
          style={{ textDecoration: "none" }}
          // onClick={handleClick}
        >
          <ArrowDownwardIcon fontSize="large" />
        </a>
      </IconButton>
    </div>
  );
}

export default Explore;
