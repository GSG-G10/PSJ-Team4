import { useState, useContext } from 'react';
import axios from 'axios';
import { Modal, Button, message } from 'antd';

import EditEmployeeForm from './EditEmployeeForm';

import { UserData } from '../../context';

const EditEmployeeModal = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const { id } = useContext(UserData);

  const EditEmployeeInfoModal = () => {
    setVisible(true);
  };
  const messageSuccess = (value) => message.success(value);
  const messageError = (value) => message.error(value);

  const sendRequest = async (userId, data) => {
    try {
      const {response} = await axios.put(`/employee/${userId}`, data);
      messageSuccess(response.data);
    } catch (error) {
      messageError(error.message);
    }
  };

  const handleOk = (data) => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      sendRequest(id, data);
    }, 2000);
  };

  const handleCancel = () => setVisible(false);

  return (
    <>
      <Button type="primary" onClick={EditEmployeeInfoModal}>
        Edit
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <EditEmployeeForm handleOk={handleOk} />
      </Modal>
    </>
  );
};
export default EditEmployeeModal;
