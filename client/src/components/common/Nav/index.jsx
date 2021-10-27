import { useState } from 'react';
import {
  Input, Button, Badge, Avatar,
  Menu, Dropdown,
} from 'antd';
import {
  BookOutlined, LogoutOutlined, UserOutlined,
} from '@ant-design/icons';
import Logo from './logo.png';
import Img from '../img/Img';

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
  const [role, setRole] = useState('');
  const onSearch = (value) => {
    // handle search
  };

  return (
    <>
      <nav className="flex justify-between items-center mb-2 py-1 px-20 border-b border-gray-200">
        <Img alt="PSJobs Logo" src={Logo} className="w-14 2xl:w-28" />
        <Search placeholder="Search" allowClear onSearch={onSearch} size="mid" style={{ width: '35%' }} />
        {role
          ? (
            <div className="flex items-center">
              <Button className="mr-7 text-sm" type="primary">{role === 'user' ? 'EXPLORE' : 'POST A JOB'}</Button>
              <Dropdown className="cursor-pointer" overlay={menu} placement="bottomCenter" arrow>
                <Badge count={5} size="small">
                  <Avatar src={Logo} shape="circle" size="mid" />
                </Badge>
              </Dropdown>
            </div>
          )
          : (
            <div>
              <Button> Login</Button>
              <Button type="primary" className="ml-3">Create Account</Button>
            </div>
          )}

      </nav>
    </>
  );
};

export default Nav;
