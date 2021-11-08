import { useEffect, useState } from 'react';
import { Typography, Card, Button } from 'antd';
import { AimOutlined, BankOutlined, SearchOutlined } from '@ant-design/icons';
import './style.css';
import Paragraph from 'antd/lib/skeleton/Paragraph';
import mercy from '../../assets/mercy.jpg';
import paltel from '../../assets/paltel.jpg';
import bank from '../../assets/bank.jpg';
import gsg from '../../assets/gsg.jpg';
import { UserData } from '../../context/UserDataContext';
import landingCompany from '../../assets/landingCompany.png';
import landingEmployee from '../../assets/landingCompany.png';
import landingUser from '../../assets/landingCompany.png';

const { Meta } = Card;
const { Title } = Typography;

const Landing = () => {
  const [role, setRole] = useState('');

  useEffect(() => {
    setRole(UserData.role);
  }, [UserData]);

  return (
    <>
      <div>
        <div>
          <Title>Find jobs on PSJobs</Title>
          <Paragraph>
            The largest job search engine.
            In a single search,
            PSJobs provides free access to thousnds of jobs
            from thousands of corporate and job sites in palestine.
          </Paragraph>
          {UserData.role === 'company' || UserData.role === 'employee' ? <Button>{UserData.role === 'company' ? 'Post a Job' : 'Explore'}</Button> : (
            <div>
              <Button>Log in</Button>
              <Button>Create an account</Button>
            </div>
          )}

        </div>
        <Image src={role === 'company' ? landingCompany : (role === 'employee' ? landingEmployee : landingUser)} />
      </div>
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
};

export default Landing;
