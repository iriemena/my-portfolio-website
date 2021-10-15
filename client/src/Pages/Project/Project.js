import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { useState } from "react";
import allProject from "./ProjectData";

import {
  Card,
  Grid,
  Typography,
  IconButton,
  Divider,
  Container,
} from "@material-ui/core";
import { FaGithub } from "react-icons/fa";

function Project() {
  const [projects, setProject] = useState(allProject);

  return (
    <Card id="project">
      <Container>
        <Typography
          variant="p"
          component="h4"
          align="center"
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            color: "rgb(18, 52, 74)",
          }}
        >
          PROJECTS
        </Typography>

        <Grid container>
          {projects.map((project) => (
            <Grid
              items
              xs={6}
              sm={4}
              md={2}
              lg={2}
              className="project-container2"
            >
              <Card className="project-items">
                <Typography
                  variant="p"
                  component="h6"
                  color="primary"
                  align="center"
                >
                  {project.name}
                </Typography>
                <Typography
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <IconButton
                    onClick={
                      () => window.open(`${project.github} `, "_blank")
                      // setProject((window.location.href = `${project.github} `))
                    }
                    style={{ color: "black", padding: "2px" }}
                  >
                    <FaGithub fontSize="large" />
                  </IconButton>
                  <IconButton
                    onClick={() => window.open(`${project.view} `, "_blank")}
                    style={{ color: "black", padding: "2px" }}
                  >
                    <VisibilityOutlinedIcon />
                  </IconButton>
                </Typography>
                <Divider />
                <Typography align="center" color="textSecondary">
                  {
                    <p>
                      {project.html} <span>{project.css}</span>{" "}
                      <span>{project.js}</span>
                      <span>{project.react}</span>
                      <span style={{ padding: "2px" }}>{project.node}</span>
                      <span>{project.express}</span>
                      <span>{project.db}</span>
                      <span style={{ padding: "2px" }}>{project.ui}</span>
                      <span style={{ padding: "2px" }}>
                        {project.bootstrap}
                      </span>
                    </p>
                  }
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Card>
  );
}

export default Project;
