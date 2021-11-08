import {
  Modal,
} from 'antd';
import './style.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TypeAccount from './reg/TypeAccount';
import LoginForm from './reg/LoginForm';

function Login({ setIsModalVisible, isModalVisible }) {
  const [typeUser, setTypeUser] = useState('');
  const [isSelectType, setIsSelectType] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  return (
    <div className="wrapper_login">
      <Modal
        className="pop_login "
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        { isSelectType
          ? <LoginForm typeUser={typeUser} />
          : <TypeAccount setTypeUser={setTypeUser} setIsSelectType={setIsSelectType} />}
      </Modal>
    </div>
  );
}

Login.propTypes = {
  setIsModalVisible: PropTypes.func.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
};

export default Login;
