import { useState } from 'react';
import { Upload } from 'antd';
import {
  getStorage, ref, uploadBytes, getDownloadURL,
} from 'firebase/storage';

import Img from '../Img';

import app from '../../../firebase.config';
import DragerDescription from './DragerDescription';
import './index.css';

const { Dragger } = Upload;

const ImageDragger = () => {
  const [imageUrl, setUrlImage] = useState('');

  const customUpload = ({ onError, onSuccess, file }) => {
    const storage = getStorage(app);
    const metadata = {
      contentType: 'image/jpeg',
    };
    const storageRef = ref(storage, file.name);
    uploadBytes(storageRef, file, metadata)
      .then((elm) => getDownloadURL(storageRef, elm.name)
        .then((url) => setUrlImage(url)));

    try {
      const image = file.name;
      onSuccess(null, image);
    } catch (e) {
      onError(e);
    }
  };

  return (
    <>
      <Dragger name="image" customRequest={customUpload}>

        {imageUrl ? (
          <Img src={imageUrl} alt="image" className="drag-drop-img" />
        ) : (
          <DragerDescription />
        )}
        {imageUrl}
      </Dragger>
    </>
  );
};

export default ImageDragger;
