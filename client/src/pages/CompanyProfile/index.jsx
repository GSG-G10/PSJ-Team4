import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Typography,
  Rate,
  Tabs,
  message,
  Button,
  Empty,
} from 'antd';
import CompanyInfo from '../../components/CompanyInfo';
import Img from '../../components/common/Img';
import { UserData } from '../../context/UserDataContext';
import './style.css';

const { Title } = Typography;
const { TabPane } = Tabs;

const CompanyProfile = () => {
  const [mapUrl, setMapUrl] = useState('');
  const [companyData, setCompanyData] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  const userData = useContext(UserData);
  const { companyId } = useParams();

  useEffect(() => {
    if (userData.data) {
      setIsAuth(companyId == userData.data.id && userData.role === 'company');
    } else {
      setIsAuth(false);
    }
  }, [userData]);

  useEffect(() => {
    const myAbortController = new AbortController();
    async function fetchingLocation(location) {
      try {
        const { data: locationData } = await axios.get(`https://nominatim.openstreetmap.org/search.php?q=${location}&format=jsonv2`, { signal: myAbortController.signal });
        const { lat } = locationData[0];
        const { lon } = locationData[0];
        const map = `https://maps.google.com/maps?q=${lat},${lon}&hl=es&z=14&amp&output=embed`;
        setMapUrl(map);
      } catch (err) {
        message.error('Enternal Server Error');
      }
    }
    if (companyData?.data?.location) {
      fetchingLocation(companyData?.data?.location);
    }
    return () => {
      myAbortController.abort();
    };
  }, [companyData]);

  useEffect(() => {
    const myAbortController = new AbortController();
    async function fetchingCompanyData(id) {
      try {
        if (!isAuth) {
          const { data } = await axios.get(`/company/${id}`, { signal: myAbortController.signal });
          setCompanyData(data);
        } else {
          setCompanyData(userData.data);
        }
      } catch (err) {
        message.error(err.response.data.Error);
      }
    }
    fetchingCompanyData(companyId);
    return () => {
      myAbortController.abort();
    };
  }, []);

  return (
    <>
      {companyData?.data ? (
        <>
          <iframe
            src={mapUrl}
            width="100%"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            title="map"
          />
          <div className="flex mx-20 text-gray-400 justify-between">
            <div className="profile -mt-16">
              <Img className="profile-img" alt="profile image" src={companyData.data.profile_img} />
              <Title level={5}>{companyData.data.name}</Title>
              <Rate disabled allowHalf defaultValue={3.5} />
              <span className="ml-4">{3.5}</span>
              {isAuth ? <Button className="self-center" type="primary">POST a Job</Button> : null}
            </div>
          </div>
          <Tabs tabPosition="left" className="profile-tabs">
            <TabPane tab="Information" key="1">
              <CompanyInfo isAuth={isAuth} data={companyData.data} />
            </TabPane>
            <TabPane tab="Jobs" key="2" />
            <TabPane tab="Review" key="3" />
          </Tabs>
        </>
      ) : <Empty className="empty" />}
    </>
  );
};

export default CompanyProfile;
