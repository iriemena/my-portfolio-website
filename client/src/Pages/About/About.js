import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { ButtonGroup, Button } from "@material-ui/core";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
// import Contact from "./Contact";

function About() {
  const [button, setButton] = useState(["About", "Skills"]);
  const [click, setClick] = useState(0);

  const handleClick = (e, index) => {
    setClick(index);
  };

  const aboutHandle = () => {
    if (click === 0) {
      return <AboutMe />;
    } else if (click === 1) {
      return <Skills />;
    }
    // else {
    //   return <Contact />;
    // }
  };

  return (
    <Card className="about-card" id="about">
      <CardMedia
        className="about-img"
        image="/images/fortune..png"
        title="Fortune"
      />
      <CardContent className="about-content">
        <ButtonGroup variant="outlined" fullWidth>
          {button.map((buttonLabel, index) => (
            <Button
              onClick={(e) => handleClick(e, index)}
              className={click === index ? "active-about" : ""}
            >
              {buttonLabel}
            </Button>
          ))}
        </ButtonGroup>

        {/* About me, skills & contact goes here  */}
        {aboutHandle()}
      </CardContent>
    </Card>
  );
}

export default About;
