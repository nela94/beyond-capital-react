import React from 'react';
import NavBar from './NavBar.js'
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
      </div>
    )
  }
};

export default Astoria
