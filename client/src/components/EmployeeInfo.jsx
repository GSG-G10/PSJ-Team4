import PropTypes from 'prop-types';
import { Card, Descriptions } from 'antd';
import EditEmployeeInfo from './EditEmployeeInfo';

const EmployeeInfo = ({
  isAuth, data, id, employeeId,
}) => {
  const employeeIdNumber = parseFloat(employeeId);
  return (
    <Card
      title="Information"
      className="profile-card"
      extra={isAuth && id === employeeIdNumber ? <EditEmployeeInfo /> : null}
    >
      <Descriptions>
        <Descriptions.Item label="First Name">{data.first_name}</Descriptions.Item>
        <Descriptions.Item label="Last Name">{data.last_name}</Descriptions.Item>
        <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
        <Descriptions.Item label="Contact">{data.contact}</Descriptions.Item>
        <Descriptions.Item label="Address">{data.location}</Descriptions.Item>
        <Descriptions.Item label="Birth Date">{data.birthDate}</Descriptions.Item>
        <Descriptions.Item label="Status">{data.status}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};
EmployeeInfo.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  data: PropTypes.objectOf.isRequired,
  id: PropTypes.number.isRequired,
  employeeId: PropTypes.number.isRequired,
};

export default EmployeeInfo;
