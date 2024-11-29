import { PiArrowCircleUpRight } from "react-icons/pi";
import { Link } from "react-router-dom";
import "../style/home.css";

const Home: React.FC = () => {

  const greeting = () => {
    const now = new Date();
    const hours = now.getHours();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = daysOfWeek[now.getDay()];

    let time = "";
    if (hours < 12) {
      time = "morning";
    } else if (hours < 18) {
      time = "afternoon";
    } else {
      time = "evening";
    }

    return { time, day };
  };

  const { time, day } = greeting();

  return (
    <>
    <div className="heading">
      <h1>Oladipupo Babayemi</h1>
      <p>Front-End Developer</p>
      <div className="greet">
        <p>
          Good {time}, Happy {day} 😉
        </p>
      </div>
      <div className="connect">
        <Link to="/about">
          <button>
            Explore <PiArrowCircleUpRight />
          </button>
        </Link>
        <button>
          Let's talk <PiArrowCircleUpRight />
        </button>
      </div>
      <body>
      </body>
    </div>
    </>
  );
};

export default Home;
