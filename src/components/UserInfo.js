import React from "react";
import "../styles/userInfo.css";

const UserInfo = (props) => {
  
  return (
    <div className="content">
      <body>
        <div className="container">
          <h2>
            {props.data.name.first} {props.data.name.last}
          </h2>
          <h2 className="id-count">{props.data.id}/25</h2>
          <p>
            From: {props.data.city}, {props.data.country}
          </p>
          <p>Job Title: {props.data.title}</p>
          <p>Employer: {props.data.epmployer}</p>
          <p>
            <h3>Favorite Movies:</h3>
            <ol>
              <li>{props.data.favoriteMovies[0]}</li>
              <li>{props.data.favoriteMovies[1]}</li>
              <li>{props.data.favoriteMovies[2]}</li>
            </ol>
          </p>
        </div>

        <div id="button-container">
          <div>
            <button className="nav-button" onClick={props.previous}>
              {`<`}Previous
            </button>
          </div>

          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>

          <div>
            <button className="nav-button" onClick={props.next}>
              {" "}
              Next {`>`}{" "}
            </button>
          </div>
        </div>
      </body>
    </div>
  );
};

export default UserInfo;
