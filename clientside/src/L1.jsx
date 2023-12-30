function L1(props) {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Architects+Daughter&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Indie+Flower&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Merienda:wght@500&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Nunito:wght@200&family=Pangolin&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Rubik+Scribble&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Single+Day&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
        {`
            .lil1{
                height:80px;
                width:260px;
                border:2px solid black;
                margin-left:35px;
                padding-top:20px;
                padding-left:10px;
            }
            .coinimg{
                // position:absolute;
                height:40px;
                left:60px;
                // top:0px;
            }

            .data{
                margin-left:80px;
                font-family:caveat;
                font-size:1cm;
                margin-top:-60px;
            }
            .text{
                margin-top:-30px;
                font-size:.57cm;
                margin-left:60px;
                font-family:chakra petch;
            }
        `}
      </style>
      <div className="lil1">
        <img src={props.img} alt="image" className="coinimg" />
        <h3 className="data">{props.data}</h3>
        <h5 className="text">{props.text}</h5>
      </div>
    </>
  );
}

export default L1;
