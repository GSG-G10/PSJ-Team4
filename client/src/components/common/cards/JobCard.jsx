/* eslint-disable array-callback-return */
import './card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MapSvg from '../../../assets/MapSvg';
import TimeSvg from '../../../assets/TimeSvg';
import MoreSvg from '../../../assets/MoreSvg';
import { timeSince } from '../../time-since';

function JobCard({ data }) {
  return (
    <Link to="pathcopany" className="card_job">
      <div className="title_job">
        <span>{data.title}</span>
      </div>
      <div className="name_copany_jobs">
        <span>{data.company}</span>
      </div>
      <div className="location_company">
        <MapSvg />
        <span>{data.location}</span>
      </div>
      <div className="time_open">
        <TimeSvg />
        <span>
          {data.timepart}
          {' '}
          time (Remontly)
        </span>
      </div>
      <div className="prive_job">
        <span>
          $
          {' '}
          {data.salary}
          {' '}
          per month
        </span>
      </div>
      <div className="skills">
        <ul>
          { (data.skills)}
        </ul>
      </div>
      <div className="info_more">
        <span>{timeSince(data.date)}</span>
        <span>{data.category}</span>
      </div>
      <div className="btn_more">
        <MoreSvg />
      </div>
    </Link>
  );
}

JobCard.propTypes = {
  data: PropTypes.string.isRequired,
};

export default JobCard;
