import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';
import { Modal, Button, message } from 'antd';

import EditEmployeeForm from './EditEmployeeForm';

const EditEmployeeModal = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const EditEmployeeInfoModal = () => {
    setVisible(true);
  };

  const messageSuccess = (value) => message.success(value);
  const messageError = (value) => message.error(value);

  const handleOk = (formData) => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      const sendRequest = async (newInformation) => {
        try {
          const response = await axios.put(`/employee/${data.id}`, newInformation);
          messageSuccess(response.data.message);
        } catch (error) {
          messageError(error.message);
        }
      };
      sendRequest(formData);
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
EditEmployeeModal.propTypes = {
  data: PropTypes.isRequired,
};
export default EditEmployeeModal;
