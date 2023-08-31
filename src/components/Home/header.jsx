import React from 'react';
import HeaderImage from "../../assets/images/header.jpg"
const Header = (props) => {
  return (
    <section className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="header-content">
              <h1 className="header-title">{props.data ? props.data.title : "Loading"}</h1>
              <p className="header-subtitle">
                {props.data ? props.data.paragraph : "Loading"}
              </p>
              <button className="btn btn-primary header-button">Get Started</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="header-image">
              <img
                src={HeaderImage}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;


// import React from "react";

// export const Header = (props) => {
//   return (
//     <header id="header">
//       <div className="intro">
//         <div className="overlay">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-md-8 intro-text">
//                 <h1 className="display-4">
//                   {props.data ? props.data.title : "Loading"}
//                   <span></span>
//                 </h1>
//                 <p className="lead">
//                   {props.data ? props.data.paragraph : "Loading"}
//                 </p>
//                 <button
//                   className="btn btn-primary btn-lg"
//                 >
//                   <a href="/event/create" className="text-decoration-none text-white">Create Event</a>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
