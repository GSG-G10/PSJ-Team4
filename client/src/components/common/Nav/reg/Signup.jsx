import { Modal } from 'antd';
import '../style.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TypeAccount from './TypeAccount';
import SignupForm from './SignupForm';

function Login({ setIsModalSignup, isModalSignup }) {
  const [typeUser, handleTypeUser] = useState('');
  const [isSelectType, setIsSelectType] = useState(false);

  const handleOk = () => {
    setIsModalSignup(false);
  };

  const handleCancel = () => {
    setIsModalSignup(false);
  };

  return (
    <div className="wrapper_login">
      {console.log(typeUser)}
      <Modal
        className="pop_login "
        visible={isModalSignup}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        { isSelectType
          ? <SignupForm typeUser={typeUser} />
          : <TypeAccount handleTypeUser={handleTypeUser} setIsSelectType={setIsSelectType} />}
      </Modal>
    </div>
  );
}

Login.propTypes = {
  setIsModalSignup: PropTypes.func.isRequired,
  isModalSignup: PropTypes.bool.isRequired,
};

export default Login;
