import React from 'react';
import NavBar from './NavBar.js'
import { LoremIpsum } from 'react-lorem-ipsum';
import { withRouter } from "react-router-dom"
import bline from './images/BLineUnit.jpg'
import './Apartments.css'

class ALineBLine extends React.Component {

  componentDidMount(){
    window.addEventListener('load', (event) => {
        document.getElementsByTagName('BODY')[0].style.background = 'white';
    })
  }
  render(){

    return (
      <div>
        <div>
          <NavBar/>
        </div>
        <div className="header-image">
          <img src={bline} alt="bline img" height="90%" width="100%"/>
        </div>
        <div className="page-content">
          <div className="title-text">
            {/*text and description*/}
            <div className="title-wrapper">
              <p>This will be some title</p>
            </div>
            <div className="text-wrapper">
              <LoremIpsum p={1} />
            </div>
          </div>
            {/*//single picture*/}
          <div className="single-image">
            <img src={bline} alt="bline" width='100%' height='100%'/>
          </div>
          {/*//image and words*/}
          <div className="images-descriptions">
            <div className="container">
              <div className="left">
                <LoremIpsum p={1} />
              </div>
              <div className="right">
                <img src={bline} alt="bline" width='100%' height='100%'/>
              </div>
            </div>
            <div className="container">
              <div className="left">
                <img src={bline} alt="bline" width='100%' height='100%'/>
              </div>
              <div className="right" >
                <LoremIpsum p={1} />
              </div>
            </div>
            <div className="container">
              <div className="left">
                <LoremIpsum p={1} />
              </div>
              <div className="right" >
                <img src={bline} alt="bline" width='100%' height='100%'/>
              </div>
            </div>
          </div>
          {/*//more images*/}
          <div className="single-image">
            <img src={bline} alt="bline" width='100%' height='100%'/>
          </div>
          <div className="single-image">
            <img src={bline} alt="bline" width='100%' height='100%'/>
          </div>
          <div className="single-image">
            <img src={bline} alt="bline" width='100%' height='100%'/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ALineBLine);
