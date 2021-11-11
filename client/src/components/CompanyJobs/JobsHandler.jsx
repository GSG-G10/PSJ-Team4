import PropTypes from 'prop-types';
import { Typography, Tag } from 'antd';
import './style.css';

const { Title, Text } = Typography;

const JobsHandler = ({ jobs }) => (
  <>
    {jobs.map((elm) => (
      <div className="job-card" key={elm.id}>
        <div className="job-card-main-data">
          <Title level={3}>{elm.title}</Title>
          <Text type="secondary">{elm.name}</Text>
          <Text type="secondary">{elm.location}</Text>
          <Text type="secondary">{elm.timepart}</Text>
          <Title level={5}>
            Salary: $
            {elm.salary}
          </Title>
        </div>
        <div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod
              tempor incididunt ut labore. Ut enim ad minim.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod
              tempor incididunt ut labore.
            </li>
          </ul>

          <Text type="secondary">
            Technologies:
            {' '}
            <Tag>{elm.category}</Tag>
          </Text>
        </div>
      </div>
    ))}
  </>
);
JobsHandler.propTypes = {
  jobs: PropTypes.objectOf.isRequired,
};
export default JobsHandler;
