import react, { useState } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import './login.scss';

const Login = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const handleAccount = (e: any) => {
    setAccount(e.target.value)
  }
  const handlePassword = (e: any) => {
    setPassword(e.target.value)    
  }

  return (
    <div className="login">
      <div className="login-form">
        <p className="login-title">即时通讯</p>
        <div className="textbox">
          <Input
            className="account"
            size="large"
            prefix={<UserOutlined />}
            value={account}
            onChange={e => handleAccount(e)}
            ></Input>
          <Input.Password
            className="password"
            size="large"
            prefix={<KeyOutlined />}
            value={password}
            onChange={e => {handlePassword(e)}}
          ></Input.Password>
        </div>
        <div className="operation">
          <span></span>
          <span className="forget">忘记密码</span>
        </div>
        <div className="buttons">
          <Button className="registered" type="default">注册</Button>
          <Button className="login-in" type="primary">登录</Button>
        </div>
      </div>
    </div>
  )
}

export default Login