import { useState } from 'react';
import {
  Input, Button, Badge, Avatar, Menu, Dropdown, Image,
} from 'antd';
import {
  BookOutlined, LogoutOutlined, UserOutlined,
} from '@ant-design/icons';
import { Logo, ImgLoad } from '../../../assets';
import Login from './reg/Login';
import Signup from './reg/Signup';

const handleSignOut = () => {
  // sign out
};

const menu = (
  <Menu>
    <Menu.Item>
      <a className="flex items-center" href="user/id">
        <UserOutlined className="mr-3" />
        profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a className="flex items-center" href="use/id">
        <BookOutlined className="mr-3" />
        saved jobs
      </a>
    </Menu.Item>
    <Menu.Item onClick={handleSignOut}>
      <LogoutOutlined className="mr-3" />
      Sign Out
    </Menu.Item>
  </Menu>
);

const { Search } = Input;

const Nav = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalSignup, setIsModalSignup] = useState(false);

  const [role, setRole] = useState('');
  const onSearch = (/* value */) => {
    // Handle search here
    setRole();
  };

  const showModalLogin = () => {
    setIsModalVisible(true);
  };

  const showModalSignup = () => {
    setIsModalSignup(true);
  };

  return (
    <>
      <nav className="flex justify-between items-center py-1 px-20 border-b border-gray-200">
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
        {role ? (
          <div className="flex items-center">
            <Button className="mr-7 text-sm" type="primary">
              {role === 'company' ? 'EXPLORE' : 'POST A JOB'}
            </Button>
            <Dropdown
              className="cursor-pointer"
              overlay={menu}
              placement="bottomCenter"
              arrow
            >
              <Badge count={5} size="small">
                <Avatar src={Logo} shape="circle" size="mid" />
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
