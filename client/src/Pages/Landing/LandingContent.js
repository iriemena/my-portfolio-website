import LandingQuote from "./LandingQuote";
import LandingDate from "./LandingDate";
import Explore from "./Explore";

function LandingContent() {
  return (
    <div className="bgImage">
      <LandingQuote />
      <LandingDate />
      <Explore />
    </div>
  );
}

export default LandingContent;
