import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Typography, Tabs, Image, message, Empty,
} from 'antd';
import UserInfo from '../../components/EmployeeInfo';
import Img from '../../components/common/Img';
import { UserData } from '../../context/UserDataContext';

const { Title } = Typography;
const { TabPane } = Tabs;

const EmployeeProfile = () => {
  const [employeeData, setEmployeeData] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  const { employeeId } = useParams();
  const userData = useContext(UserData);

  const stringToNumber = (string) => parseFloat(string);

  useEffect(() => {
    if (userData?.data) {
      setIsAuth(stringToNumber(employeeId) === userData.data.id && userData.role === 'employee');
    } else {
      setIsAuth(false);
    }
  }, [userData]);

  useEffect(() => {
    const myAbortController = new AbortController();
    async function fetchingEmployeeData(userId) {
      try {
        if (!isAuth) {
          const { data } = await axios.get(`/api/v1/employee/${userId}`, { signal: myAbortController.signal });
          setEmployeeData(data);
        } else {
          setEmployeeData(userData.data);
        }
      } catch (err) {
        message.error(err.message);
      }
    }
    fetchingEmployeeData(employeeId);
    return () => {
      myAbortController.abort();
    };
  }, []);

  return (
    <>
      { employeeData?.data ? (
        <>
          <Image placeholder height="315px" width="100%" alt="cover image" src={employeeData.data.cover_img} fallback="https://friendzpoint.blob.core.windows.net/frp/uploads/users/covers/default-cover-user.png" />
          <div className="flex mx-20 text-gray-400 justify-between">
            <div className="profile -mt-16">
              <Img className="profile-img" alt="profile image" src={employeeData.data.profile_img} />
              <Title level={5}>{`${employeeData.data.first_name} ${employeeData.data.last_name}`}</Title>
              <span className="ml-4">
                {employeeData.data.status}
              </span>
            </div>
          </div>
          <Tabs tabPosition="left" className="profile-tabs">
            <TabPane tab="Information" key="1">
              <UserInfo isAuth={isAuth} data={employeeData.data} />
            </TabPane>
            <TabPane tab="Saved" key="2" />
          </Tabs>
        </>
      ) : (
        <Empty className="empty" />
      )}
    </>
  );
};

export default EmployeeProfile;
