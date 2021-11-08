import { Typography, Card } from 'antd';
import { AimOutlined, BankOutlined, SearchOutlined } from '@ant-design/icons';
import './style.css';
import mercy from '../../assets/mercy.jpg';
import paltel from '../../assets/paltel.jpg';
import bank from '../../assets/bank.jpg';
import gsg from '../../assets/gsg.jpg';

const { Meta } = Card;
const { Title } = Typography;

const Landing = () => (
  <>
    <div className="sevices bg-primary py-8">
      <Title level={3} className="text-center">OUR SERVICES</Title>
      <div className="flex justify-around w-8/12 mx-auto mt-8 mb-6">
        <Card
          className="sevices-cards"
          hoverable
          cover={<AimOutlined />}
        >
          <Meta title={(
            <span>
              Find the
              <br />
              Right Job
            </span>
          )}
          />
        </Card>
        <Card
          className="sevices-cards"
          hoverable
          cover={<SearchOutlined />}
        >
          <Meta title={(
            <span>
              Research
              <br />
              Companies
            </span>
          )}
          />
        </Card>
        <Card
          className="sevices-cards"
          hoverable
          cover={<BankOutlined />}
        >
          <Meta title={(
            <span>
              Review
              <br />
              Companies
            </span>
          )}
          />
        </Card>
      </div>
    </div>
    <div className="partners py-8 my-8">
      <Title level={3} className="text-center">OUR PARTNERS</Title>
      <div className="flex justify-around w-9/12 mx-auto my-10 ">
        <Card
          className="partner-cards"
          hoverable
          cover={<img alt="example" src={mercy} />}
        />
        <Card
          className="partner-cards"
          hoverable
          cover={<img alt="example" src={gsg} />}
        />
        <Card
          className="partner-cards"
          hoverable
          cover={<img alt="example" src={bank} />}
        />
        <Card
          className="partner-cards"
          hoverable
          cover={<img alt="example" src={paltel} />}
        />
      </div>
    </div>
  </>
);

export default Landing;
