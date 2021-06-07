import React from 'react';
import NavBar from './NavBar.js'
import { LoremIpsum } from 'react-lorem-ipsum';
import './Apartments.css'

class Astoria extends React.Component{
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
        <div className="header-image">
          <img src="https://www.cityguideny.com/columnpic/astoria.jpg" alt="bline img" height="90%" width="100%"/>
        </div>
        <div className="page-content">
          <div className="title-text">
            <LoremIpsum p={5} className="paragraph"/>
            </div>
        </div>
      </div>
    )
  }
};

export default Astoria
