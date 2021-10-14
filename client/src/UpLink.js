import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { IconButton } from "@material-ui/core";
import { useState } from "react";

function UpLink() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    const size = window.scrollY;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    const size = window.scrollY;
    size > 400 ? setVisible(true) : setVisible(false);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <IconButton>
      <ArrowUpwardIcon
        className={`${visible ? "uplink" : ""}`}
        color="primary"
        onClick={handleClick}
        color="error"
      />
    </IconButton>
  );
}

export default UpLink;
