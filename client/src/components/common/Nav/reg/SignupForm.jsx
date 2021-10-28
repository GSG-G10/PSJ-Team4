import {
  Button, Image, Typography,
  Form, Input,
} from 'antd';
import '../style.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import Logo from '../logo.png';

const { Title } = Typography;

function TypeAccount({ typeUser }) {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const checkLogin = (values) => {
    console.log(typeUser);
    axios.post('/signup', { value: values, typeUser })
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
        <Title level={4}>Sign up</Title>
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
        {
        typeUser === 'company'
          ? (
            <Form.Item label="Company Name" style={{ marginBottom: 0 }}>
              <Form.Item
                name="name"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
              >
                <Input placeholder="name" />
              </Form.Item>
              <Form.Item
                name="last_name"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
              >
                <Input placeholder="Location" />
              </Form.Item>
            </Form.Item>
          )
          : (
            <Form.Item label="Full name" style={{ marginBottom: 0 }}>
              <Form.Item
                name="first_name"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
              >
                <Input placeholder="First name" />
              </Form.Item>
              <Form.Item
                name="last_name"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
              >
                <Input placeholder="Last name" />
              </Form.Item>
            </Form.Item>
          )
        }
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
        <Form.Item
          label="Confirm Password"
          name="cpassword"
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
