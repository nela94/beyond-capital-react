import React from 'react';
import NavBar from './NavBar.js'

class Astoria extends React.Component{
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
