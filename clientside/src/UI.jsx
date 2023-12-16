import React from "react";
import coin from "./coin_1.png";
function UI() {
  function openWallet() {
    window.ethereum.request({ method: "eth_requestAccounts" }).catch((err) => {
      console.log("Error opening wallet : ", err);
    });
  }

  function flip() {
    const coin = document.querySelector(".cimg");
    coin.classList.toggle = "flipped";
    console.log("Spining");
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
            margin-top:20px;
            background-color:#301934;
            border:5px solid #947d3f;
            color:white;
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
            margin-top:50px;
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
            height:270px;
            width:270px;
            border:2px solid #947d3f;
            margin-top:30px;
            margin-left:300px;
            border-radius:25px;
          }
          .cimg{
            ehight:160px;
            width:160px;
            margin-top:35px;
            transform: rotateY(0deg); 
            transition: transform 0.7s ease-in-out;
          }
          .flipped {
            transform: rotateY(180deg);
          }

          transition: transform 0.2s ease-in-out; 

          // @keyframes spin {
          //   from { transform: rotateY(0deg); }
          //   to { transform: rotateY(360deg); }
          // }

          .status{
            color:white;
            font-family:montserrat;
            font-size:.66cm;
            margin-top:18px;
            font-weight:400;
            letter-spacing:2px;
          }

          .fb{
            font-family:montserrat;
            font-size:.6cm;
            background-color:#947d3f;
            color:white;
            border:0px;
            border-radius:4px;
            margin-left:40px;
            margin-top: 30px;
            padding:3px 15px;
            letter-spacing:2px;
          }
          .fb:hover{
            background-color:brown;
            cursor:pointer;
          }
          .head{
            margin-left:-85px;
          }

          .earnblk{
            height:150px;
            width:200px;
            background-color:#301934;
            border:5px solid #947d3f;
            margin-top:30px;
            margin-left:43.5px;
            font-size:.4cm;
          }

          .earns{
            color:white;
            font-family:Montserrat;
            font-size:.56cm;
            padding-top:6px;
          }

          .val{
            color:white;
            font-size:.6cm;
            margin-top:-15px;
          }

        
          
        `}
      </style>
      <div className="complete">
        <div className="firstblk">
          <h1 className="title">CO!NFL!P</h1>
          <div className="uldiv">
            <ul className="ul1">
              <li className="li1">GUIDE</li>
              <li className="li1">RULES</li>
            </ul>
          </div>
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
            <div className="earnblk">
              <h4 className="earns">YOUR EARNINGS</h4>
              <h5 className="val">
                0 Sepol!aETH <br />
              </h5>
            </div>
          </div>
          <div className="secondblk">
            <div className="imgblk">
              <img src={coin} alt="" className="cimg" />
              <h5 className="status">FL!P</h5>
            </div>
            <button className="head fb" id="flip" onClick={flip}>
              HEAD
            </button>
            <button className="tail fb" id="flip" onClick={flip}>
              TA!L
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UI;
