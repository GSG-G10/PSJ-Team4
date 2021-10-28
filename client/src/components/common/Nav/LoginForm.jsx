import {
  Button, Image, Typography,
  Form, Input,
} from 'antd';
import './style.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import Logo from './logo.png';

const { Title } = Typography;

function TypeAccount({ typeLogin }) {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const checkLogin = (values) => {
    axios.post('/login', { value: values, typeLogin })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <div className="icon_jsjobs">
        <Image
          preview={false}
          width={60}
          src={Logo}
        />
        <Title level={4}>Log in</Title>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={checkLogin}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form_to_login"
      >

        <Form.Item
          label="Email"
          name="Email"
          rules={[
            { required: true, message: 'Please input your username!' },
            { type: 'email' },
          ]}
        >
          <Input placeholder="mail@email.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>

        <Form.Item className="bowl_btn_submit">
          <Button type="primary" className="ant-btn-submit" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </div>
  );
}

TypeAccount.propTypes = {
  typeLogin: PropTypes.string.isRequired,
};

export default TypeAccount;
