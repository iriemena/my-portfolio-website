import { Typography, IconButton } from "@material-ui/core";
import CopyrightOutlinedIcon from "@material-ui/icons/CopyrightOutlined";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { FaGithub } from "react-icons/fa";
import UpLink from "./../UpLink";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div>
        <div className="social">
          <IconButton className="social-icon">
            <LinkedInIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sunday-nnaji-fortune-5a7686136/"
                )
              }
            />
          </IconButton>
          <IconButton className="social-icon">
            <TwitterIcon
              onClick={() => window.open("https://www.twitter.com/Sunny__Tech")}
            />
          </IconButton>
          <IconButton className="social-icon">
            <FacebookIcon
              onClick={() => window.open("https://www.facebook.com/iriemena")}
            />
          </IconButton>
          <IconButton className="social-icon">
            <InstagramIcon
              onClick={() =>
                window.open("https://www.instagram.com/contactsunnytech/")
              }
            />
          </IconButton>
          <IconButton className="social-icon">
            <FaGithub
              onClick={() => window.open("https://github.com/iriemena")}
            />
          </IconButton>
          <UpLink />
        </div>

        <Typography color="primary">
          Copyright <CopyrightOutlinedIcon style={{ fontSize: "16px" }} />{" "}
          {year}
          <span> sunnytech</span>
        </Typography>
        <Typography variant="body1" style={{ fontSize: "12px" }}>
          All rights reserved. Designed by me
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
