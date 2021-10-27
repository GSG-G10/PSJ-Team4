import {
  Modal,
} from 'antd';
import './style.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TypeAccount from './TypeAccount';
import LoginForm from './LoginForm';

function Login({ setIsModalVisible, isModalVisible }) {
  const [typeLogin, setTypeLogin] = useState('');
  const [isSelectType, setIsSelectType] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="wrapper_login">
      {console.log(typeLogin)}
      <Modal
        className="pop_login "
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        { isSelectType
          ? <LoginForm typeLogin={typeLogin} />
          : <TypeAccount setTypeLogin={setTypeLogin} setIsSelectType={setIsSelectType} />}
      </Modal>
    </div>
  );
}

Login.propTypes = {
  setIsModalVisible: PropTypes.func.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
};

export default Login;
