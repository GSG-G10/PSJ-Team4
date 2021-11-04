import './card.css';
import { Link } from 'react-router-dom';
import MapSvg from '../../../assets/MapSvg';
import TimeSvg from '../../../assets/TimeSvg';
import MoreSvg from '../../../assets/MoreSvg';

function CompanyCard() {
  return (
    <Link to="pathcopany" className="card_job">
      <div className="title_job">
        <span>UX/UI designer</span>
      </div>
      <div className="name_copany_jobs">
        <span>Gaza Sky Geeks</span>
      </div>
      <div className="location_company">
        <MapSvg />
        <span>Palestine, Gaza strip, Gaza</span>
      </div>
      <div className="time_open">
        <TimeSvg />
        <span>Full/Part time (Remontly)</span>
      </div>
      <div className="prive_job">
        <span>$ 400 - 500 per month</span>
      </div>
      <div className="skills">
        <ul>
          <li>Lorem Ipsum has been the industry tandard dummy text ever since the .</li>
          <li>Lorem Ipsum has beetext ever since the .</li>
          <li>Lorem Ipsum has beene the .</li>
        </ul>
      </div>
      <div className="info_more">
        <span>1 Hour ago,</span>
        <span>Web development</span>
      </div>
      <div className="btn_more">
        <MoreSvg />
      </div>
    </Link>
  );
}

export default CompanyCard;
