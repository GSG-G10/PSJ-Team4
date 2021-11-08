/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Cascader,
  Select,
  Button,
  AutoComplete,
  DatePicker,
} from 'antd';

const { Option } = Select;
const { Item } = Form;
const residences = [
  {
    value: 'Palestine',
    label: 'Palestine',
    children: [
      {
        value: 'Gaza Strip',
        label: 'Gaza Strip',
        children: [
          {
            value: 'Bayt Hanoon',
            label: 'Bayt Hanoon',
          },
          {
            value: 'Jabalia',
            label: 'Jabalia',
          },
          {
            value: 'Gaza',
            label: 'Gaza',
          },
          {
            value: 'Dayr Al Balah',
            label: 'Dayr Al Balah',
          },
          {
            value: 'Nosirat',
            label: 'Nosirat',
          },
          {
            value: 'Khan Younis',
            label: 'Khan Younis',
          },
          {
            value: 'Rafah',
            label: 'Rafah',
          },
        ],
      },
      {
        value: 'West Bank',
        label: 'West Bank',
        children: [
          {
            value: 'Hebron',
            label: 'Hebron',
          },
          {
            value: 'Ramallh',
            label: 'Ramallh',
          },
          {
            value: 'Nablus',
            label: 'Nablus',
          },
          {
            value: 'Jenin',
            label: 'Jenin',
          },
          {
            value: 'Tulkarm',
            label: 'Tulkarm',
          },
          {
            value: 'Yattah',
            label: 'Yattah',
          },
          {
            value: 'Modi\'in Illit',
            label: 'Modi\'in Illit',
          },
          {
            value: 'Qalqilyah',
            label: 'Qalqilyah',
          },
          {
            value: 'Al-Bireh',
            label: 'Al-Bireh',
          },
          {
            value: 'Beitar Illit',
            label: 'Beitar Illit',
          },
          {
            value: 'Ma\'ale Adummim',
            label: 'Ma\'ale Adummim',
          },
          {
            value: 'Bethlehem',
            label: 'Bethlehem',
          },
          {
            value: 'Jericho',
            label: 'Jericho',
          },
          {
            value: 'Ariel',
            label: 'Ariel',
          },
        ],
      },

    ],
  },

];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const EditEmployeeForm = ({ handleOk }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    handleOk(values);
  };

  const prefixSelector = (
    <Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+970">+970</Option>
        <Option value="+972">+970</Option>
      </Select>
    </Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onEmailChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ['.com', '.net', '.co', '.gov', '.org', '.edu'].map((domain) => `${value}${domain}`),
      );
    }
  };

  const emailOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['Palestine'],
        prefix: '+970',
      }}
      scrollToFirstError
    >
      <Item name="firstName" label="First Name">
        <Input />
      </Item>
      <Item name="lastName" label="Last Name">
        <Input />
      </Item>

      <Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
        ]}
      >
        <AutoComplete options={emailOptions} onChange={onEmailChange} placeholder="website">
          <Input />
        </AutoComplete>
      </Item>

      <Item
        name="password"
        label="Change Password"
      >
        <Input.Password />
      </Item>

      <Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Item>

      <Item
        name="address"
        label="Address"
      >
        <Cascader options={residences} />
      </Item>

      <Item
        name="contact"
        label="Contact"
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Item>
      <Item name="date-picker" label="DatePicker" type="object">
        <DatePicker />
      </Item>

      <Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit Updates
        </Button>
      </Item>
    </Form>
  );
};
EditEmployeeForm.propTypes = {
  handleOk: PropTypes.isRequired,
};
export default EditEmployeeForm;
