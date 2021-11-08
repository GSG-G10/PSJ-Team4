/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';

import { Comment, Avatar } from 'antd';

import { UserOutlined } from '@ant-design/icons';

const ReviewsHandler = ({ data }) => (
  <>
    {data.map((elm, index) => (
      <>
        <Comment
          key={index}
          author={
            elm.is_anonymous ? 'Anonymous'
              : `${elm.first_name} ${elm.last_name}`
            }
          avatar={
            elm.is_anonymous ? <Avatar icon={<UserOutlined />} />
              : <Avatar src={elm.profile_img} alt={`${elm.first_name} ${elm.last_name}`} />
        }
          content={<p>{elm.review_content}</p>}
        />
      </>
    ))}

  </>
);
ReviewsHandler.propTypes = {
  data: PropTypes.objectOf.isRequired,
};
export default ReviewsHandler;
