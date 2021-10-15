const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// This middleware informs the express application to serve our compiled React files
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.use(express.json());
app.use(cors());

app.post("/send", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_ID,
      pass: process.env.password,
    },
  });

  const mail = {
    from: req.body.email,
    to: process.env.USER_ID,
    subject: req.body.subject,
    html: `<h3>You have a new message  from ${req.body.name.toUpperCase()}</h3>
            <div>
            <p><strong>Email:</strong> ${req.body.email}</p>
              <p><strong>Phone:</strong> ${req.body.phone}</p>
            </div>
            <h3>Message:</h3>
            <p>${req.body.message}</p>
      `,
  };

  transporter.sendMail(mail, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        success: false,
        message: "",
      });
    } else {
      res.send({
        success: true,
        message: "",
      });
    }
  });

  transporter.close();
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
