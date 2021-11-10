import { Rate, Image } from 'antd';
import './card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MapSvg from '../../../assets/MapSvg';
import TimeSvg from '../../../assets/TimeSvg';

function CompanyCard({ data }) {
  return (
    <Link to={`/company/${data.id}`} className="card_company">
      <div className="logo_company">
        <Image preview={false} width={70} src={data.profile_img} />
      </div>
      <div className="name_copany">
        <span>{data.name}</span>
      </div>
      <div className="rate_company">
        <span>
          <Rate disabled defaultValue={4} />
          4.5
        </span>
      </div>
      <div className="location_company">
        <MapSvg />
        <span>{data.location}</span>
      </div>
      <div className="time_open">
        <TimeSvg />
        <span>{`${data.start_work_time} - ${data.end_work_time}`}</span>
      </div>
    </Link>
  );
}

CompanyCard.propTypes = {
  data: PropTypes.string.isRequired,
};

export default CompanyCard;
