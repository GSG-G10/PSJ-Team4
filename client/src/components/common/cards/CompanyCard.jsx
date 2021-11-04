import { Rate, Image } from 'antd';
import './card.css';
import { Link } from 'react-router-dom';
import MapSvg from '../../../assets/MapSvg';
import TimeSvg from '../../../assets/TimeSvg';

function CompanyCard() {
  return (
    <Link to="pathcopany" className="card_company">
      <div className="logo_company">
        <Image preview={false} width={70} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
      </div>
      <div className="name_copany">
        <span>Gaza Sky Geeks</span>
      </div>
      <div className="rate_company">
        <span>
          <Rate disabled defaultValue={4} />
          4.5
        </span>
      </div>
      <div className="location_company">
        <MapSvg />
        <span>Palestine, Gaza strip, Gaza</span>
      </div>
      <div className="time_open">
        <TimeSvg />
        <span>9:00 Am - 17:00 Pm</span>
      </div>
    </Link>
  );
}

export default CompanyCard;
