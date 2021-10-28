import PropTypes from 'prop-types';
import {
  Card,
  Button,
  Descriptions,
} from 'antd';

const CompanyInfo = ({ isAuth, data }) => (
  <Card title="Information" className="profile-card" extra={isAuth ? <Button type="primary">Edit</Button> : null}>
    <Descriptions>
      <Descriptions.Item label="Name">{data.name}</Descriptions.Item>
      <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
      <Descriptions.Item label="Address">{data.location}</Descriptions.Item>
      <Descriptions.Item label="Work Time">{data.timeWork}</Descriptions.Item>
    </Descriptions>
  </Card>
);
CompanyInfo.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  data: PropTypes.objectOf.isRequired,
};

export default CompanyInfo;
