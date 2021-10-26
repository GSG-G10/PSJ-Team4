import { InboxOutlined } from '@ant-design/icons';

const DragerDescription = () => (
  <div>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">
      Click or drag image to this area to upload
    </p>
    <p className="ant-upload-hint">
      Support for a images to upload. Strictly prohibit from uploading company
      data or other band files
    </p>
  </div>
);
export default DragerDescription;
