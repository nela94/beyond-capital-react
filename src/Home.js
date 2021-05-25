import React from 'react';
import SlideShow from './SlideShow.js'
import logo from './images/BeyondCapitalV2.gif';

class Home extends React.Component{
  render(){
    const slides = [
      {
        city: "Paris",
        country: "France",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg"
      },
      {
        city: "Singapore",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg"
      },
      {
        city: "Prague",
        country: "Czech Republic",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg"
      },
      {
        city: "Amsterdam",
        country: "Netherlands",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg"
      },
      {
        city: "Moscow",
        country: "Russia",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg"
      }
    ];
    return(
       <div>
          <div className="bg" >
            <img src={logo} width='100%' height='100%'/>
          </div>
          <div>
            <SlideShow slides={slides}/>
          </div>
        </div>
      )
  };
};

export default Home
