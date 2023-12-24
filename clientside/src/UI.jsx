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
            width:330px;
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
            width:110vh;

          }

          .imgblk{
            height:230px;
            width:230px;
            border:2px solid #947d3f;
            margin-top:30px;
            margin-left:200px;
            border-radius:25px;
          }
          .cimg{
            ehight:150px;
            width:150px;
            margin-top:35px;
            // transform: rotateY(0deg); 
            // transition: transform 0.7s ease-in-out;
          }

          .spin {
            animation : spinkaro 0.7s linear infinite;
          }

          @keyframes spinkaro {
            from{
              transform : rotateY
            }
          }
          // .flipped {
          //   transform: rotateY(180deg);
          // }

          // transition: transform 0.2s ease-in-out; 

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
            margin-left:30px;
            margin-top:-10px;
            padding:3px 15px;
            letter-spacing:2px;
          }
          .fb:hover{
            background-color:brown;
            cursor:pointer;
          }

          .makeBet{
            margin-top:0px;
              font-family:chakra petch;
              font-size:.6cm;
              color:purple;
          }
          
          .head{
            margin-left:-5px;
          }

          .earnblk{
            height:150px;
            width:200px;
            background-color:#301934;
            border:5px solid #947d3f;
            margin-top:30px;
            margin-left:53.5px;
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

          .uldiv{
            margin-top:-100px;
            display:flex;
            padding-left:20px;
            margin-left:400px;
          }

          .ul1{ 
            list-decoration:none;
            display:flex;
            list-style:none;
            gap:50px;
            margin-left:470px;
            color:white;
            font-size:.79cm;
            font-family: amatic sc;
            margin-top:8px;
          }
          
          .l{
            cursor:pointer;
            letter-spacing:2px;
          }
          .l:hover{
            color:grey;
          }
          
          .youtxt{
            font-family:bree serif;
            font-size:1.2cm;
            margin-top:10px;
            margin-bottom:15px;
            color:#990000;
            text-decoration:underline;
          }

          .bettxt{
            font-family:chakra petch;
            font-size:.4cm;
            color:grey;
            width:300px;
            margin-left:10px;
            margin-top:20px;
          }

          .displayblk{
            height:80px;
            width:350px;
            padding-top:0px;
            margin-top:50px;
            margin-left:140px;
            background-color:white;
            border:5px solid  #947d3f;
            border-radius:5px;
            
          }

          .distxt{
            margin-top:13px;
            font-size:1cm;
            color: #301934;

          }
        `}
      </style>
      <div className="complete">
        <div className="firstblk">
          <h1 className="title">CO!NFL!P</h1>
          <div className="uldiv">
            <ul className="ul1">
              <li className="l li1">GU!DE</li>
              <li className="l li2">RULES</li>
              <li className="l li3" onClick={openWallet}>
                L!NK_ACC
              </li>
            </ul>
          </div>
        </div>
        <div className="mid">
          <div className="as1">
            <h1 className="youtxt">YOU</h1>
            <h4 className="makeBet">Select your option</h4>
            <button className="head fb" id="flip" onClick={flip}>
              HEAD
            </button>
            <button className="tail fb" id="flip" onClick={flip}>
              TA!L
            </button>
            <h6 className="bettxt">
              Round will start when you select the option !
            </h6>
            <div className="earnblk">
              <h4 className="earns">YOUR EARN!NGS</h4>
              <h5 className="val">
                0 ETH <br />
              </h5>
            </div>
          </div>
          <div className="secondblk">
            <div className="imgblk">
              <img src={coin} alt="" className="cimg" />
            </div>
            <div className="displayblk">
              <h1 className="distxt">LET'S__GO !!</h1>
            </div>
          </div>
          <div className="as1">
            <h1 className="youtxt">OPPONENT</h1>
            <br />
            <br />
            <h4
              className="makeBet"
              style={{ fontSize: ".7cm", width: "250px", marginLeft: "35px" }}
            >
              Opponent will bet against your option
            </h4>
            <h6 className="bettxt" style={{ fontSize: ".57cm" }}>
              For ex. if you bet on "Head", <br />
              Opponent will bet on "Tail"
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default UI;
