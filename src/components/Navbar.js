import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';


export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid ">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {/* <li className="nav-item">
               <Link ClassName="active nav-link" to={'/about'}>{props.about}</Link>
              <a className="nav-link" href="/about">{props.about}</a> 
            </li> */}
          </ul>
          <div className="form-check form-check-inline">
            <input className="form-check-input active" onClick={props.bg1} style={{backgroundColor: 'grey',borderColor: 'grey'}} type="radio" name="backGround"/>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" onClick={props.bg2} style={{backgroundColor: 'cyan',borderColor: 'cyan'}} type="radio" name="backGround"/>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" onClick={props.bg3} style={{backgroundColor: 'green',borderColor: 'green'}} type="radio" name="backGround"/>
          </div>
  
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="radio" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired, 
    // about: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: "Set Title Here",
    // about: "About"
}
