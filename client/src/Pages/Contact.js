import { Typography, Button, Grid, Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import axios from "axios";
import { useState } from "react";
// import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";
import Card from "@material-ui/core/Card";

function Contact2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = { name, email, subject, phone, message };
    axios
      .post("/send", items)
      .then((response) => {
        console.log(response);
        setResult(response.data);
        setResult({
          success: true,
          message: "Thanks for contacting me, I will get back to you shortly",
        });

        setTimeout(() => {
          setResult({
            success: true,
            message: "",
          });
        }, 5000);

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setPhone("");
      })
      .catch(() => {
        setResult({
          success: false,
          message: "Ooops! Something went wrong. Try again later",
        });
        setTimeout(() => {
          setResult({
            success: false,
            message: "",
          });
        }, 5000);
      });
  };

  return (
    <Container style={{ marginTop: "10px", overflow: "hidden" }} id="contact">
      <Typography
        variant="p"
        component="h2"
        style={{
          color: "rgb(18, 52, 74)",
          marginBottom: "10px",
          display: "grid",
          placeItems: "center",
        }}
      >
        Get in touch
      </Typography>
      {result && (
        <p className={`${result.success ? "success" : "error"}`}>
          {result.message}
        </p>
      )}

      <div className="contact-section">
        <Card variant="outlined" className="contact-information">
          <Grid container>
            <Grid
              items
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="contact-info"
            >
              <Typography
                color="primary"
                align="center"
                variant="p"
                component="h3"
              >
                Contact Information
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  marginTop: "5px",
                  fontFamily: "cursive",
                }}
              >
                Fill up the form and I will get back to you immediately
              </Typography>
            </Grid>
            <Grid
              items
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="contact-info"
            >
              <Typography color="textSecondary">
                <EmailIcon fontSize="small" color="primary" />{" "}
                contactsunnytech@gmail.com
              </Typography>
            </Grid>
            <Grid
              items
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="contact-info"
            >
              <Typography color="textSecondary">
                <PhoneIcon fontSize="small" color="primary" /> +2347063638452
              </Typography>
            </Grid>
            <Grid
              items
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="contact-info"
            >
              <Typography color="textSecondary">
                <LocationOnIcon fontSize="small" color="primary" /> Nigeria
              </Typography>
            </Grid>
          </Grid>
        </Card>

        <form onSubmit={handleSubmit}>
          <Grid
            container
            style={{
              padding: "5px",
            }}
          >
            <Grid items xs={12} sm={12} md={6} lg={6}>
              <TextField
                variant="outlined"
                placeholder="Full name"
                label="Full name"
                size="small"
                value={name}
                fullWidth
                required
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: "15px" }}
              />
            </Grid>

            <Grid items xs={12} sm={12} md={6} lg={6}>
              <TextField
                style={{ marginBottom: "15px", marginLeft: "2px" }}
                variant="outlined"
                placeholder="Subject"
                label="Subject"
                fullWidth
                required
                size="small"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Grid>

            <Grid items xs={12} sm={12} md={6} lg={6}>
              <TextField
                style={{ marginBottom: "15px" }}
                variant="outlined"
                placeholder="Email"
                label="Email"
                size="small"
                type="email"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid items xs={12} sm={12} md={6} lg={6}>
              <TextField
                style={{ marginBottom: "15px", marginLeft: "2px" }}
                variant="outlined"
                placeholder="Phone No."
                label="Phone No."
                type="number"
                size="small"
                fullWidth
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>

            <Grid items xs={12} sm={12} md={12} lg={12}>
              <TextField
                style={{ marginBottom: "2px" }}
                variant="outlined"
                placeholder="Message"
                label="Message"
                size="small"
                required
                fullWidth
                multiline
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginBottom: "30px", float: "right" }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Contact2;
