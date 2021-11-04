import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Typography,
  Rate,
  Tabs,
  message,
  Button,
} from 'antd';
import CompanyInfo from '../../components/CompanyInfo';
import Img from '../../components/common/Img';
// import authContext from '../../context/authContext';
import './style.css';

const { Title } = Typography;
const { TabPane } = Tabs;

const CompanyProfile = () => {
  const [mapUrl, setMapUrl] = useState('');
  const [companyData, setCompanyData] = useState({});

  // const { isAuth } = useContext(authContext);
  const { companyId } = useParams();

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
    fetchingLocation(companyData.location);
    return () => {
      myAbortController.abort();
    };
  }, [companyData]);

  useEffect(() => {
    const myAbortController = new AbortController();
    async function fetchingCompanyData(id) {
      try {
        const data = await axios.get(`/company/${id}`, { signal: myAbortController.signal });
        setCompanyData(data);
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
      {mapUrl && companyData.profileImage ? (
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
              <Img className="profile-img" alt="profile image" src={companyData.profileImage} />
              <Title level={5}>{companyData.name}</Title>
              <Rate disabled allowHalf defaultValue={companyData.rate} />
              <span className="ml-4">{companyData.rate}</span>
              {isAuth ? <Button className="self-center" type="primary">POST a Job</Button> : null}
            </div>
          </div>
          <Tabs tabPosition="left" className="profile-tabs">
            <TabPane tab="Information" key="1">
              <CompanyInfo isAuth={isAuth} data={companyData} />
            </TabPane>
            <TabPane tab="Jobs" key="2" />
            <TabPane tab="Review" key="3" />
          </Tabs>
        </>
      ) : null}
    </>
  );
};

export default CompanyProfile;
