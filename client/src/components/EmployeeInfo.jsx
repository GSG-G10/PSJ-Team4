import PropTypes from 'prop-types';
import {
  Card,
  Button,
  Descriptions,
} from 'antd';

const EmployeeInfo = ({ isAuth, data }) => (
  <Card title="Information" className="profile-card" extra={isAuth ? <Button type="primary">Edit</Button> : null}>
    <Descriptions>
      <Descriptions.Item label="First Name">{data.first_name}</Descriptions.Item>
      <Descriptions.Item label="Last Name">{data.last_name}</Descriptions.Item>
      <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
      <Descriptions.Item label="Contact">{data.phone_number}</Descriptions.Item>
      <Descriptions.Item label="Address">{data.location}</Descriptions.Item>
      <Descriptions.Item label="Birth Date">{data.age}</Descriptions.Item>
      <Descriptions.Item label="Status">{data.status}</Descriptions.Item>
    </Descriptions>
  </Card>
);
EmployeeInfo.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  data: PropTypes.objectOf.isRequired,
};

export default EmployeeInfo;
