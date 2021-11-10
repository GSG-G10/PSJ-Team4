/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useEffect, useState } from 'react';
import {
  Typography, Card, Button, Image,
} from 'antd';
import { AimOutlined, BankOutlined, SearchOutlined } from '@ant-design/icons';
import './style.css';

import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import axios from 'axios';
import mercy from '../../assets/mercy.jpg';
import paltel from '../../assets/paltel.jpg';
import bank from '../../assets/bank.jpg';
import gsg from '../../assets/gsg.jpg';
import { UserData } from '../../context/UserDataContext';
import landingCompany from '../../assets/landingCompany.png';
import landingEmployee from '../../assets/landingEmployee.png';
import landingUser from '../../assets/landingUser.png';
import Login from '../../components/common/Nav/reg/Login';
import Signup from '../../components/common/Nav/reg/Signup';
import JobCard from '../../components/common/cards/JobCard';
import CompanyCard from '../../components/common/cards/CompanyCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { Meta } = Card;
const { Title, Text } = Typography;

const Landing = () => {
  const [role, setrole] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalSignup, setIsModalSignup] = useState(false);
  const [rows, setRows] = useState([]);

  const userData = useContext(UserData);

  const showModalLogin = () => {
    setIsModalVisible(true);
  };
  const showModalSignup = () => {
    setIsModalSignup(true);
  };

  useEffect(() => {
    setrole(userData.role);
  }, [userData]);

  useEffect(() => {
    axios.post('/api/v1/search', { type: 'company' }).then(
      (res) => {
        console.log(res.data);
        setRows(res.data);
      },
    );
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
  };
  return (
    <>
      {role === 'company' || role === 'employee' ? (
        <div className="header">
          <div className="text-container">
            <Title>
              Find jobs on
              <br />
              <span className="psjob">
                PSJobs
              </span>
            </Title>
            <Text className="text">
              The largest job search engine.
              In a single search,
              PSJobs provides free access to thousnds of jobs
              from thousands of corporate and job sites in palestine.
            </Text>
            <div>
              <Button size="mid" type="primary">{role === 'company' ? 'Post a Job' : 'Explore'}</Button>
            </div>
          </div>
          <Image preview={false} src={role === 'company' ? landingCompany : landingEmployee} />
        </div>
      ) : (
        <div className="header">
          <div className="text-container">
            <Title>
              Find jobs on
              <br />
              <span className="psjob">
                PSJobs
              </span>
            </Title>
            <Text className="text">
              The largest job search engine.
              In a single search,
              PSJobs provides free access to thousnds of jobs
              from thousands of corporate and job sites in palestine.
            </Text>
            <div className="flex">
              <Button size="mid" type="primary" onClick={showModalLogin}>Log in</Button>
              {
              isModalVisible && (
                <Login
                  setIsModalVisible={setIsModalVisible}
                  isModalVisible={isModalVisible}
                />
              )
            }
              <Button size="mid" className="mx-5" onClick={showModalSignup}>Create an account</Button>
              {
            isModalSignup && (
              <Signup
                setIsModalSignup={setIsModalSignup}
                isModalSignup={isModalSignup}
              />
            )
          }
            </div>
          </div>
          <Image preview={false} src={landingUser} />
        </div>
      )}

      <div className="sevices bg-primary py-8">
        <Title level={3} className="text-center">OUR SERVICES</Title>
        <div className="flex justify-around w-8/12 mx-auto mt-8 mb-6">
          <Link to="/search/jobs" className="linkled_none">
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
          </Link>
          <Link to="/search/company" className="linkled_none">
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
          </Link>
          <Link to="/search/company" className="linkled_none">
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
          </Link>
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

      <div className="seaction_cards">
        <div className="title_seaction">
          <span className="explore">Explore Jobs</span>
          <span className="seeall">See ALl</span>
        </div>

        <div className="cards_landing_sec">
          <JobCard data={{
            id: 2,
            title: 'Editor',
            company: 'Yodo',
            location: 'Clyde Gallagher Place',
            timepart: 'part',
            salary: '900 - 1500',
            skills: '["Shotokan Karate","Video Editing","Business Rules"]',
            category: 'Editor',
            date: 'Mon Nov 08 2021 13:25:31 GMT+0200 (????? ??????? ??????)',
          }}
          />
          <JobCard data={{
            id: 1,
            title: 'front end developer',
            company: 'GSG',
            location: 'Gaza',
            timepart: 'full',
            salary: '30 - 44',
            skills: '["senior","senior","senior"]',
            category: 'Web Developer',
            date: 'Mon Nov 08 2021 13:25:31 GMT+0200 (????? ??????? ??????)',
          }}
          />
          <JobCard data={{
            id: 2,
            title: 'Editor',
            company: 'Yodo',
            location: 'Clyde Gallagher Place',
            timepart: 'part',
            salary: '900 - 1500',
            skills: '["Shotokan Karate","Video Editing","Business Rules"]',
            category: 'Editor',
            date: 'Mon Nov 08 2021 13:25:31 GMT+0200 (????? ??????? ??????)',
          }}
          />
        </div>
      </div>
      <div className="seaction_cards">
        <div className="title_seaction">
          <span className="explore">Explore Campanies</span>
          <span className="seeall">See ALl</span>
        </div>

        <div className="cards_landing_sec">
          <CompanyCard data={{
            id: 10,
            name: 'Gevee',
            email: 'gvasyukhnov9@jalbum.net',
            password: 'Abi1zw',
            location: 'gaza',
            profile_img: 'https://robohash.org/dolorconsecteturlabore.png?size=50x50&set=set1',
            start_work_time: '3:33 PM',
            end_work_time: '3:12 PM',
            location_lat: '49.7479799',
            location_lon: '23.9240561',
          }}
          />
          <CompanyCard data={{
            id: 2,
            name: 'Jaloo',
            email: 'kwindeatt1@smh.com.au',
            password: 'o4Ypm20EnyO',
            location: 'gaza',
            profile_img: 'https://robohash.org/numquamenimqui.png?size=50x50&set=set1',
            start_work_time: '6:15 PM',
            end_work_time: '3:35 AM',
            location_lat: '34.746611',
            location_lon: '113.625328',
          }}
          />
          <CompanyCard data={{
            id: 8,
            name: 'Oyoyo',
            email: 'ckenrat7@linkedin.com',
            password: '7SKj1NtPMpM',
            location: 'gaza',
            profile_img: 'https://robohash.org/officiisvelitenim.png?size=50x50&set=set1',
            start_work_time: '5:05 AM',
            end_work_time: '1:03 AM',
            location_lat: '-7.2457322',
            location_lon: '112.7795375',
          }}
          />
        </div>
      </div>
      <div className="bowl_slider">
        <div className="title_sec_Slid">
          <h2>Employee Benefit Reviews</h2>
          <span>What employees say about the compmanies</span>
        </div>
        <Slider {...settings} className="sliderhome">
          { rows ? rows.map((datas) => <CompanyCard data={datas} />) : null }
        </Slider>
      </div>
    </>
  );
};

export default Landing;
