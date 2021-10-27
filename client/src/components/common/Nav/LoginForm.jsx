import {
  Button, Image, Typography,
  Form, Input, Checkbox,
} from 'antd';
import './style.css';
import PropTypes from 'prop-types';
import Logo from './logo.png';

const {
  Title,
} = Typography;

function TypeAccount({ typeLogin }) {
  console.log(typeLogin);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form_to_login"
      >

        <Form.Item
          label="Email"
          name="email"
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

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item className="bowl_btn_submit" wrapperCol={{ offset: 8, span: 16 }}>
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
