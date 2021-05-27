import React from 'react';
import NavBar from './NavBar.js'
import { LoremIpsum } from 'react-lorem-ipsum';
import { withRouter } from "react-router-dom"
import './Apartments.css'

class ALineBLine extends React.Component {
  render(){

    return (
      <div>
      <div>
        <NavBar/>
      </div>
        <div className="header-image">
          This will be header image
        </div>
        <div className="page-content">
          <div className="title-text">
            <div className="title-wrapper">
              <p>This will be some title</p>
            </div>
            <div className="text-wrapper">
              <LoremIpsum p={1} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ALineBLine);
