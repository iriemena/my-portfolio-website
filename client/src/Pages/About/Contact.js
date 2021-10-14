import { Typography, IconButton, Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import axios from "axios";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = { name, email, subject, message };
    axios
      .post("http://localhost:4000/send", items)
      .then((response) => {
        setResult(response.data);
        console.log(result);
        console.log(items);

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later",
        });
      });
  };

  return (
    <div style={{ marginTop: "10px" }} id="contact">
      <Typography
        variant="p"
        component="h2"
        style={{ color: "rgb(18, 52, 74)", marginBottom: "10px" }}
      >
        Get in touch
      </Typography>

      <Grid container style={{ marginBottom: "10px" }}>
        <Grid items xs={12} sm={12} md={6} lg={6}>
          <Typography color="textSecondary">
            <EmailIcon fontSize="small" color="primary" />
            contactsunnytech@gmail.com
          </Typography>
        </Grid>
        <Grid items xs={12} sm={12} md={6} lg={6}>
          <Typography color="textSecondary">
            <PhoneIcon fontSize="small" color="primary" /> +2347063638452
          </Typography>
        </Grid>
      </Grid>

      {result && (
        <p className={`${result.success ? "success" : "error"}`}>
          {result.message}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid items xs={12} sm={12} md={8} lg={6}>
            <TextField
              variant="outlined"
              placeholder="Name"
              label="Name"
              size="small"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "15px" }}
            />
          </Grid>

          <Grid items xs={12} sm={12} md={6} lg={6}>
            <TextField
              style={{ marginBottom: "15px" }}
              variant="outlined"
              placeholder="Email"
              label="Email"
              size="small"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid items xs={12} sm={12} md={6} lg={6}>
            <TextField
              style={{ marginBottom: "15px", marginLeft: "2px" }}
              variant="outlined"
              placeholder="Subject"
              label="Subject"
              size="small"
              fullWidth
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Grid>

          <Grid items xs={12} sm={12} md={8} lg={6}>
            <TextField
              style={{ marginBottom: "2px" }}
              variant="outlined"
              placeholder="Message"
              label="Message"
              size="small"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
        </Grid>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

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
      </div>
    </div>
  );
}

export default Contact;
