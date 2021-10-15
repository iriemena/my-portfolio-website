import { useState, useEffect } from "react";

function LandingDate() {
  // Time
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  // Date
  const [week, setWeek] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  // Greetings
  const [greeting, setGreeting] = useState("");

  // Trailing zeros
  const zero = (time) => {
    return time < "10" ? `0${time}` : time;
  };

  const hrs = new Date().getHours() > 12 ? "PM" : "AM";

  const weeks = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  let months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const greetings = () => {
    const hr = new Date().getHours();

    if (hr < 12) {
      setGreeting("GOOD MORNING!");
    } else if (hr < 18) {
      setGreeting("GOOD AFTERNOON!");
    } else {
      setGreeting("GOOD EVENING!");
    }
  };

  useEffect(() => {
    greetings();
    const getDate = () => {
      const today = new Date();
      setHour(zero(today.getHours() % 12 || 12));
      setMinute(zero(today.getMinutes()));
      setSecond(zero(today.getSeconds()));
      setWeek(today.getDay());
      setMonth(today.getMonth());
      setDay(today.getDate());
      setYear(today.getFullYear());
    };
    getDate();
    setInterval(getDate, 1000);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="time">{`${hour}:${minute}:${second} ${hrs}`}</h1>
      <h3 className="date">
        {`${weeks[week]}, ${months[month]} ${day}, ${year}`}
      </h3>
      <h1 className="greeting">{greeting}</h1>
      <h3 className="welcome">Welcome to my website</h3>
    </div>
  );
}

export default LandingDate;
