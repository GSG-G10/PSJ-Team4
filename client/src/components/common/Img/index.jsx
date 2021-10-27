import PropTypes from 'prop-types';

const Img = ({ alt, src, className }) => (
  <img alt={alt} src={src} className={className} />
);

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Img;
