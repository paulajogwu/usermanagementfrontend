import React from "react";
import "./css/LogoPanel.css";
import coat from '../../assets/img/coa.png'
 const LogoPanel = () => {
  return (
    <div className="logo-panel">
      <img
        src={coat}
        alt="Coat of Arms of Nigeria"
        className="logo-image"
        style={{width:'100%'}}
      />
      <h2>Federal Republic Of Nigeria</h2>
    </div>
  );
};
export default LogoPanel

