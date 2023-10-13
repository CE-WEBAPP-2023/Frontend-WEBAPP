import React from 'react';
import webLogo from '../asset/webLogo.png';
import './NavTemplate.css';
const NavTemplate = ({yourCode}) => {

  return (
    <div class="navTemplate">
        <div className="header">
            <img src={webLogo} alt="" class="webLogo"/>
        </div>
        <div className="content">
            {yourCode}
        </div>
        <div className="footer">

        </div>
    </div>
  );
};

export default NavTemplate;