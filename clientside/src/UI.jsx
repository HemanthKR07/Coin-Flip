import React from "react";
import coin from "./coin_1.png";
function UI() {
  function openWallet() {
    window.ethereum.request({ method: "eth_requestAccounts" }).catch((err) => {
      console.log("Error opening wallet : ", err);
    });
  }
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Indie+Flower&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
        {`
          .firstblk{
            height:100px;
            background-color:#301934;
            margin-top:-42px;
            border-bottom:2px solid #947d3f;
          }

          .title{
            font-family:handjet;
            font-size:1.6cm;
            padding-top:18px;
            margin-left:-950px;
            letter-spacing:8px;
            color:white;
          }

            .mid{
                display:flex;
            }

          .as1{
            height:83vh;;
            width:300px;
            margin-left:0px;
            background-color:white;
          }

          .addwal{
            font-family:Montserrat;
            font-size:.6cm;
            margin-top:30px;
            background-color:#301934;
            border:5px solid #947d3f;
            color:white;
            // border-radius:px;
            padding:8px 20px;
            cursor:pointer;
          }

          .addwal:hover{
              background-color:purple;
          }

          .score{
            height:150px;
            width:200px;
            background-color:#301934;
            // border-radius:10px;
            border:5px solid #947d3f;
            margin-top:80px;
            margin-left:43.5px;
          }

          .scoretit{
            color:white;
            font-family:Montserrat;
            font-size:.6cm;
            padding-top:6px;
          }
          .sco{
            color:white;
            font-size:.8cm;
            margin-top:-15px;
          }

          .secondblk{
            background-color:#301934;
            width:170vh;
            // color:white;

          }

          .imgblk{
            height:300px;
            width:300px;
            border:2px solid #947d3f;
            margin-top:30px;
            margin-left:300px;
          }
          .cimg{
            ehight:200px;
            width:200px;
            margin-top:50px;
          }

        `}
      </style>
      <div className="complete">
        <div className="firstblk">
          <h1 className="title">CO!NFL!P</h1>
        </div>
        <div className="mid">
          <div className="as1">
            <button className="addwal" onClick={openWallet}>
              Add wallet
            </button>
            <div className="score">
              <h4 className="scoretit">YOUR SCORE</h4>
              <h5 className="sco">0</h5>
            </div>
          </div>
          <div className="secondblk">
            <div className="imgblk">
              <img src={coin} alt="" className="cimg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UI;
