import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 intro-text">
                <h1 className="display-4">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p className="lead">
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <button
                  className="btn btn-primary btn-lg"
                >
                  <a href="/create-event" className="text-decoration-none text-white">Create your event</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
