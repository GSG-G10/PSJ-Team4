import { useState } from 'react';
import { Modal } from 'antd';

import { EditOutlined } from '@ant-design/icons';
import ImageDragger from './ImageDragger';

const UploadImageModal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <EditOutlined
        style={{ fontSize: '150%', color: '#2F66B0' }}
        onClick={() => setVisible(true)}
      />
      <Modal
        title="Change profile image"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >

        <ImageDragger />

      </Modal>
    </>
  );
};

export default UploadImageModal;
