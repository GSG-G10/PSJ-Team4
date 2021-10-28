import {
  Button, Image, Typography,
  Form, Input, message,
} from 'antd';
import '../style.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Logo } from '../../../../assets';

const { Title } = Typography;

function TypeAccount({ typeUser }) {
  const onFinishFailed = () => {
    message.warning('This is a warning');
  };

  const checkLogin = (values) => {
    axios.post('/login', { value: values, typeUser })
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
  typeUser: PropTypes.string.isRequired,
};

export default TypeAccount;
