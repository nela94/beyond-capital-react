import React from 'react';
import NavBar from './NavBar.js'

class ContactUs extends React.Component{
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

      </div>
    )
  }
};

export default ContactUs
