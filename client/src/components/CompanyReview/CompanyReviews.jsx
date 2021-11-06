import PropTypes from 'prop-types';

import ReviewsHandler from './ReviewsHandler';

const CompanyReviews = ({ reviews }) => (
  reviews.length > 0 ? <ReviewsHandler data={reviews} /> : null

);

CompanyReviews.propTypes = {
  reviews: PropTypes.objectOf.isRequired,
};

export default CompanyReviews;
