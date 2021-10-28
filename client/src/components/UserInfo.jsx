import PropTypes from 'prop-types';
import {
  Card,
  Button,
  Descriptions,
} from 'antd';

const UserInfo = ({ isAuth, data }) => (
  <Card title="Information" style={{ width: '100%' }} extra={isAuth ? <Button type="primary">Edit</Button> : null}>
    <Descriptions>
      <Descriptions.Item label="First Name">{data.firstName}</Descriptions.Item>
      <Descriptions.Item label="Last Name">{data.lastName}</Descriptions.Item>
      <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
      <Descriptions.Item label="Contact">{data.contact}</Descriptions.Item>
      <Descriptions.Item label="Address">{data.location}</Descriptions.Item>
      <Descriptions.Item label="Birth Date">{data.birthDate}</Descriptions.Item>
      <Descriptions.Item label="Status">{data.status}</Descriptions.Item>
    </Descriptions>
  </Card>
);
UserInfo.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  data: PropTypes.objectOf.isRequired,
};

export default UserInfo;
