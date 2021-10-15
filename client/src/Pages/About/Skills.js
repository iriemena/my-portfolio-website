import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaWordpress,
  FaNodeJs,
} from "react-icons/fa";

import { SiMaterialUi, SiJavascript, SiReact } from "react-icons/si";
import { DiNodejs, DiMongodb } from "react-icons/di";
function Skills() {
  return (
    <div style={{ marginTop: "10px", textAlign: "justify" }}>
      <Typography
        variant="p"
        component="h2"
        style={{ color: "rgb(18, 52, 74)", marginBottom: "10px" }}
      >
        Skills
      </Typography>
      <p>I am proficient in the following: </p>

      <List>
        <Grid container spacing={2}>
          <Grid items xs={6} sm={4} md={3} lg={3}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {" "}
                  <FaHtml5 />
                </Avatar>
              </ListItemAvatar>

              <ListItemText primary="HTML" />
            </ListItem>
          </Grid>
          <Grid items xs={6} sm={4} md={3} lg={3}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {" "}
                  <FaCss3Alt />
                </Avatar>
              </ListItemAvatar>

              <ListItemText primary="CSS" />
            </ListItem>
          </Grid>
          <Grid items xs={6} sm={4} md={3} lg={3}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {" "}
                  <FaBootstrap />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Bootstrap" />
            </ListItem>
          </Grid>
          <Grid items xs={6} sm={4} md={3} lg={3}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {" "}
                  <SiMaterialUi />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="MUI" />
            </ListItem>
          </Grid>
          <Grid items xs={6} sm={4} md={3} lg={3}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {" "}
                  <FaWordpress />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Wordpress" />
            </ListItem>
          </Grid>
          <Grid items xs={6} sm={4} md={3} lg={3}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {" "}
                  <SiJavascript />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Javascript" />
            </ListItem>
          </Grid>
          <Grid items xs={6} sm={4} md={3} lg={3}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {" "}
                  <DiNodejs />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="NodeJs" />
            </ListItem>
          </Grid>
          <Grid items xs={6} sm={4} md={3} lg={3}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {" "}
                  <FaNodeJs />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="ExpressJs" />
            </ListItem>
          </Grid>
          <Grid items xs={6} sm={4} md={3} lg={3}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {" "}
                  <DiMongodb />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="MongoDB" />
            </ListItem>
          </Grid>
          <Grid items xs={6} sm={4} md={3} lg={3}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {" "}
                  <DiMongodb />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Mongoose" />
            </ListItem>
          </Grid>
          <Grid items xs={6} sm={4} md={3} lg={3}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {" "}
                  <SiReact />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="ReactJs" />
            </ListItem>
          </Grid>
        </Grid>
      </List>
    </div>
  );
}

export default Skills;
