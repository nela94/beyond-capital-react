import React from 'react';
import { withRouter } from "react-router-dom"
import SlideShow from './SlideShow.js'
import NavBar from './NavBar.js'
import logo from './images/BeyondCapitalV2.gif';
import bline from './images/BLineUnit.jpg'
import gardenUnit from './images/GardenUnit.jpg'
import penthouse from './images/PentHouse.jpg'

class Home extends React.Component{

  componentDidMount(){
    let gif = document.getElementsByClassName('bg')
    let slideDiv = document.getElementsByClassName('hidden-slideshow')
    window.addEventListener('load', (event) => {
      setTimeout(function() {
        gif[0].style.display = 'none';
        slideDiv[0].style.display = "block";
        document.getElementsByTagName('BODY')[0].style.background = 'white';
    }, 4000);
    });
  }

  render(){

    const slides = [
      {
        key: 1,
        title: "A-line/B-Line",
        content: "add some other content",
        img: bline
      },
      {
        key: 2,
        title: "Garden Apartment",
        img: gardenUnit
      },
      {
        key: 3,
        title: "Penthouse",
        content: "some other content",
        img: penthouse
      },
    ];
    return(
       <div>
          <div className="bg" >
            <img src={logo} width='100%' height='100%' alt="logo pic"/>
          </div>
          <div className="hidden-slideshow">
            <NavBar/>
            <SlideShow slides={slides}/>
          </div>
        </div>
      )
  };
};

export default withRouter(Home);
