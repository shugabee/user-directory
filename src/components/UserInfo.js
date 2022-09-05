import React, { useState } from "react";
import '../styles/userInfo.css';


const UserInfo = (props) => {

    return (
        <div className='content'>
    <body>
      <div className="container">
        <h2>{props.name.first} {props.name.last}</h2>
        <h2>{props.id}/25</h2>
        <p>From: {props.city}, {props.country}</p>
        <p>Job Title: {props.title}</p>
        <p>Employer: {props.epmployer}</p>
        <p>
          <h3>Favorite Movies:</h3>
          <ol>
            <li>{props.favoriteMovies[0]}</li>
            <li>{props.favoriteMovies[1]}</li>
            <li>{props.favoriteMovies[2]}</li>
          </ol>
        </p>

      </div>

      <div id="button-container">
        <div>  
          <button className="nav-button" onClick={props.previous}>{`<`}Previous</button> 
        </div>
       
        <button>Edit</button>
        <button>Delete</button>
        <button>New</button>

        <div> 
        <button className="nav-button" onClick={props.next}> Next {`>`} </button>
        </div>

      </div>
    </body>
  </div>
    )
}

export default UserInfo;