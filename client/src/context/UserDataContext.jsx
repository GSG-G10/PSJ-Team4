import { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export const UserData = createContext();

const UserDataProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const session = Cookies.get('session');
  const sessionDecoded = session ? jwtDecode(session) : null;

  const fetchData = async () => {
    let res;
    if (sessionDecoded.role === 'employee') {
      res = await axios.get(`/api/v1/employee/${sessionDecoded.id}`);
    } else {
      res = await axios.get(`/api/v1/company/${sessionDecoded.id}`);
    }
    setUserInfo({
      role: sessionDecoded.role,
      data: res.data.data,
    });
  };

  useEffect(() => {
    if (!session) {
      setUserInfo({ role: 'user' });
    } else {
      fetchData();
    }
  }, []);

  return (
    <UserData.Provider value={userInfo}>
      {children}
    </UserData.Provider>
  );
};

UserDataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserDataProvider;
