import {
  Row, Col, Typography,
} from 'antd';
import {
  FacebookFilled, TwitterSquareFilled, LinkedinFilled, GooglePlusSquareFilled,
} from '@ant-design/icons';

import './style.css';
import Img from '../img/Img';
import GSG from './GSG.png';
import PALTEL from './PALTEL.png';
import MERCY from './MERCY.png';
import BANKP from './BANKP.png';

const {
  Title, Paragraph, Link, Text,
} = Typography;

function Footer() {
  return (
    <footer className="footer">
      <Row className="px-20 py-5 bg-primary">
        <Col span={5}>
          <Title className="footer-title" level={5}>PSJobs</Title>
          <Paragraph className="footer-content">
            The largest job search engine.
            In a single search,
            PSJobs provides free access to thousnds of jobs from
            thousands of corporate and job sites
            in palestine.
          </Paragraph>
        </Col>

        <Col span={12} style={{ display: 'flex', flexDirection: 'column' }} className="flex-col">
          <Title className="footer-title" style={{ textAlign: 'center' }} level={5}>AROUND THE WEB</Title>
          <Row className="flex m-auto justify-between w-4/12">
            <LinkedinFilled style={{ color: 'white', fontSize: '30px' }} />
            <TwitterSquareFilled style={{ color: 'white', fontSize: '30px' }} />
            <FacebookFilled style={{ color: 'white', fontSize: '30px' }} />
            <GooglePlusSquareFilled style={{ color: 'white', fontSize: '30px' }} />
          </Row>
          <Row className="footer-content m-auto" style={{ textAlign: 'center' }}>
            Copyrights saved for
            <Link className="footer-content link" style={{ textAlign: 'center', color: 'black' }} href="https://github.com/GSG-G10/PSJobs">
              Team 4
            </Link>
          </Row>
        </Col>
        <Col span={3}>
          <Title className="footer-title" level={5}>PSJobs</Title>
          <div className="flex flex-col">
            <Link className="footer-content" href="/search/jobs">
              Jobs
            </Link>
            <Link className="footer-content" href="/search/companies">
              Companies
            </Link>
            <Link className="footer-content" href="https://github.com/GSG-G10/PSJobs">
              Privecy policy
            </Link>
            <Link className="footer-content" href="https://github.com/GSG-G10/PSJobs">
              Help and support
            </Link>
          </div>
        </Col>
        <Col span={3} className="flex">
          <Title style={{ textAlign: 'center' }} className="footer-title" level={5}>OUR PARTNERS</Title>
          <Row className="mt-4" justify="center">
            <Col span={6} className="mr-1">
              <Img alt="Gaza Sky Geeks Logo" src={GSG} />
            </Col>
            <Col span={6}>
              <Img alt="Paltel Logo" src={PALTEL} />
            </Col>
          </Row>
          <Row className="mt-4" justify="center">
            <Col span={6} className="mr-3">
              <Img alt="Bank of Palestine Logo" src={BANKP} />
            </Col>
            <Col span={6}>
              <Img alt="Mercy Corps Logo" src={MERCY} />
            </Col>
          </Row>

        </Col>
      </Row>
    </footer>

  );
}

export default Footer;
