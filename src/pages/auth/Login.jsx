import React from "react";
import { Row, Col } from "antd";
import LogoPanel from "./logoPanel";
import LoginForm from "./loginform";

import "./css/Signin.css"; 



 const Login = () => {


  return (
    <div className="app-container">
    <Row justify="space-evenly" align="middle" className="content-row">
      <Col xs={24} sm={12} md={10} lg={8} className="left-panel">
        <LogoPanel />
      </Col>
      <Col xs={24} sm={12} md={10} lg={8} className="right-panel">
        <LoginForm />
      </Col>
    </Row>
  </div>
  );
};


export default Login