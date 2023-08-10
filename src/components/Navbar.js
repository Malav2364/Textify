import React from 'react'

export default function Navbar(props) {
  return (
        <div id="nav">
          <h2 id='logo'>{props.title}</h2>
          <div id="nav-2">
            <ul>
              <li><a href="#" id='op'>{props.listc1}</a></li>
              <li><a href="#" id='op'>Services</a></li>
              <li><a href="#" id='op'>About-us</a></li>
              <li><a href="#" id='op'>Pricing</a></li>
            </ul>
          </div>
          <div className="menu">
            <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></button>
          </div>
        </div>
  )
}

//'rfc' keyword  is used to create a functional component
