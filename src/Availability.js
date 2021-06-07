import React from 'react';
import NavBar from './NavBar.js'
import './Availability.css'

class Availability extends React.Component{
  componentDidMount(){
    window.addEventListener('load', (event) => {
        document.getElementsByTagName('BODY')[0].style.background = 'white';
    })
  }
  render(){
    return(
      <div>
        <div>
          <NavBar/>
        </div>
        <section className="info">
          <div className="container-availability">
            <div className="inner">
              <div className="left-column">
                <div className="title">
                  AVAILABILITY
                </div>
                <div className="description">
                OCCUPANCY
                <br/>
                Model Residences Open By Appoitment
                </div>
                <div className="fact-sheet">
                <a href="" > DOWNLOAD FACTSHEET</a>
                </div>
              </div>
              <div className="right-column">
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
};

export default Availability
