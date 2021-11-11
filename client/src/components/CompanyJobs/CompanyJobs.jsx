import PropTypes from 'prop-types';

import JobsHandler from './JobsHandler';

const CompanyJobs = ({ jobs }) => (
  jobs.length > 0 ? <JobsHandler jobs={jobs} /> : null
);
CompanyJobs.propTypes = {
  jobs: PropTypes.objectOf.isRequired,
};
export default CompanyJobs;
