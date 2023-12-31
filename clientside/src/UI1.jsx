import "./Styles/Ui1.css";
import L1 from "./L1";
// import Img from "./flipImg.png";
import i1 from "./i1.svg";
import i2 from "./i2.svg";

function UI1() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Architects+Daughter&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Indie+Flower&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Merienda:wght@500&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Rubik+Scribble&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Single+Day&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
      </style>
      <div className="uiBlk">
        <div className="navBlock">
          <h1 className="title">CoinFlip</h1>
        </div>

        <div className="l1Blk">
          <L1 img={i1} data="$ 100,000" text="Total Bet Tokens" />
          <L1 img={i2} data="$ 100,000" text="All Bets" />
        </div>
      </div>
    </>
  );
}

export default UI1;
