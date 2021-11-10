/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from 'react';

import {
  Input, Button, Badge, Avatar, Menu, Dropdown, Image,
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { BookOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { UserData } from '../../../context/UserDataContext';
import { Logo, ImgLoad } from '../../../assets';
import Login from './reg/Login';
import Signup from './reg/Signup';

const { Search } = Input;

const handleSignOut = () => {
  // sign out
};

const Nav = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalSignup, setIsModalSignup] = useState(false);
  const [role, setrole] = useState('');

  const userData = useContext(UserData);
  const history = useHistory();

  useEffect(() => {
    setrole(userData.role);
  }, [userData]);

  const onSearch = (value) => {
    history.push('/search/company');
  };

  const showModalLogin = () => {
    setIsModalVisible(true);
  };

  const showModalSignup = () => {
    setIsModalSignup(true);
  };

  return (
    <>
      <nav className="h-16 flex justify-between items-center py-1 px-20 border-b border-gray-200">
        <Image
          width="5%"
          alt="PSJobs Logo"
          src={Logo}
          preview={false}
          fallback={ImgLoad}
        />
        <Search
          placeholder="Search"
          allowClear
          onSearch={onSearch}
          size="mid"
          style={{ width: '35%' }}
        />
        {role === 'company' || role === 'employee' ? (
          <div className="flex items-center">
            {userData.role === 'company' ? (
              <Button className="mr-7 text-sm" type="primary">POST A JOB</Button>
            ) : (
              <Button className="mr-7 text-sm" type="primary">EXPLORE</Button>
            )}
            <Dropdown
              className="cursor-pointer"
              overlay={(
                <Menu>
                  <Menu.Item>
                    <Link className="flex items-center" to={`${userData?.role}/${userData?.data?.id}`}>
                      <UserOutlined className="mr-3" />
                      Profile
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <a className="flex items-center" href="use/id">
                      <BookOutlined className="mr-3" />
                      Jobs
                    </a>
                  </Menu.Item>
                  <Menu.Item onClick={handleSignOut}>
                    <LogoutOutlined className="mr-3" />
                    Sign Out
                  </Menu.Item>
                </Menu>
              )}
              placement="bottomCenter"
              arrow
            >
              <Badge count={5} size="small">
                <Avatar src={userData.profile_img} shape="circle" size="mid" />
              </Badge>
            </Dropdown>
          </div>
        ) : (
          <div>
            <Button onClick={showModalLogin}> Login</Button>
            {
              isModalVisible && (
                <Login
                  setIsModalVisible={setIsModalVisible}
                  isModalVisible={isModalVisible}
                />
              )
            }
            <Button onClick={showModalSignup} type="primary" className="ml-3">Create Account</Button>
            {
            isModalSignup && (
              <Signup
                setIsModalSignup={setIsModalSignup}
                isModalSignup={isModalSignup}
              />
            )
          }
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
