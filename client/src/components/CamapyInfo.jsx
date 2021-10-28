import PropTypes from 'prop-types';
import {
  Card,
  Button,
  Descriptions,
} from 'antd';

const CampanyInfo = ({ isAuth, data }) => (
  <Card title="Information" style={{ width: '100%' }} extra={isAuth ? <Button type="primary">Edit</Button> : null}>
    <Descriptions>
      <Descriptions.Item label="Name">{data.name}</Descriptions.Item>
      <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
      <Descriptions.Item label="Address">{data.location}</Descriptions.Item>
      <Descriptions.Item label="Work Time">{data.timeWork}</Descriptions.Item>
    </Descriptions>
  </Card>
);
CampanyInfo.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  data: PropTypes.objectOf.isRequired,
};

export default CampanyInfo;
