import React,{useContext,useState} from "react";
import { Form, Input, Button, Checkbox, Space,message } from "antd";
import {useNavigate} from 'react-router-dom'
import "./css/LoginForm.css";
import {Context} from '../../context/contextAPI'
 const LoginForm = () => {
    const {login} = useContext(Context);
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const result = await login(values.email, values.password);
    setLoading(false);
    if (result.success) {
      message.success('Login successful');
      navigate('/');
    } else {
      message.error(result.message);
    }
  };
 

  return (
    <div className="login-form-container" style={{textAlign:'center'}}>
    
      <h2>LOGIN</h2>
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        className="login-form"
        // style={{width:'300px'}}
      >
        <Form.Item
          //label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          //label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

      <Space>
      <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <div className="actions">
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>
      </Space>

        <Form.Item>
          <Button type="primary" style={{backgroundColor:'#087d49'}} htmlType="submit" loading={loading} block>
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};


export default LoginForm