import React from "react";
import blackInBusinessImg from "../assets/blackinbusiness2.jpeg";

const BlackInBusiness = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>BLACK IN BUSINESS</h1>
      <p>Strategy. Clarity. Growth.</p>
      <img
        src={blackInBusinessImg}
        alt="BLACK IN BUSINESS"
        style={{ maxWidth: "300px", borderRadius: "15px" }}
      />
    </div>
  );
};

export default BlackInBusiness;



