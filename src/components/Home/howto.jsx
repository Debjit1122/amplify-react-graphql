import React from "react";

export const HowTo = (props) => {
  return (
    <div id="howto" className="text-center">
      <div className="container p-3">
        <div className="col-md-12 section-title">
          <h2>How it works?</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                {" "}
                <i className={d.icon}></i>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
