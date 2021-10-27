import { useState } from 'react';
import { Upload, message, Image } from 'antd';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';

import app from '../../../firebase.config';
import DragerDescription from './DragerDescription';
import './index.css';

const { Dragger } = Upload;

const ImageDragger = () => {
  const [imageUrl, setUrlImage] = useState('');

  const customUpload = ({ file }) => {
    const storage = getStorage(app);
    const memiTypes = ['image/jpeg', 'image/png'];
    if (memiTypes.includes(file.type)) {
      const storageRef = ref(storage, file.name);
      uploadBytes(storageRef, file)
        .then((elm) => getDownloadURL(storageRef, elm.name))
        .then((url) => setUrlImage(url))
        .then(() => message.success(
          `${file.name} 
        image uploaded successfully click OK
        to submit your changes.`,
        ));
    } else {
      throw message.error(
        `${file.name} is not a image file you can use (.jpeg or .png) types`,
      );
    }
  };

  return (
    <>
      <Dragger multiple={false} name="image" customRequest={customUpload}>
        {imageUrl ? (
          <Image preview={false} src={imageUrl} alt="image" className="drag-drop-img" />
        ) : (
          <DragerDescription />
        )}
      </Dragger>
    </>
  );
};

export default ImageDragger;
