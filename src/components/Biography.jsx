import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          SKINVISION to develop an AI-powered digital platform to meet the rising demand for dermatological consultations and accurate prescription management, especially in underserved areas. The platform will enable remote skin disease detection and prescription interpretation, reducing delays in diagnosis and treatment. It also addresses challenges in managing prescriptions and accessing care by offering an AI-integrated solution for remote consultations, improving access, accuracy, and overall care efficiency.

          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
