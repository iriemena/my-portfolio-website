import { Typography, IconButton } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div style={{ marginTop: "10px", textAlign: "justify" }}>
      <Typography
        variant="p"
        component="h2"
        style={{ color: "rgb(18, 52, 74)", marginBottom: "10px" }}
      >
        About me
      </Typography>
      <Typography style={{ marginRight: "10px" }}>
        My Name is Sunday Gabriel (alias Fortune) from Lagos, Nigeria. I am a
        Software Developer who is passionate about using the best tool in
        solving real life problem. I am open for a remote or regular role in
        front-end software development.
      </Typography>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography color="primary">
          {" "}
          <span
            style={{
              display: "block",
              color: "black",
              fontSize: "18px",
            }}
          >
            For more information
          </span>{" "}
          Download my CV{" "}
        </Typography>
        <IconButton>
          {" "}
          <Link to="/resume.pdf" download="/resume.pdf" target="_blank">
            {" "}
            <GetAppIcon />
          </Link>
        </IconButton>
      </div>
    </div>
  );
}

export default AboutMe;
