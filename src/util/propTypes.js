import PropTypes from 'prop-types';

export const customObject = PropTypes.shape({
  lang: PropTypes.string,
  title: PropTypes.string,
  context: PropTypes.string,
  section: PropTypes.string,
  parent_section: PropTypes.string,
  page: PropTypes.string,
  url: PropTypes.string,
  h_link: PropTypes.string,
  num: PropTypes.number,
  position: PropTypes.number
});

export const footerObject = PropTypes.shape({
  lang: PropTypes.string,
  title: PropTypes.string,
  parent: PropTypes.string,
  h_link: PropTypes.string,
  url: PropTypes.string,
  num: PropTypes.number
});

export const navbarObject = PropTypes.shape({
  lang: PropTypes.string,
  title: PropTypes.string,
  h_link: PropTypes.string,
  num: PropTypes.number
});

export default customObject;
