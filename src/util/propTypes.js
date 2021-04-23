import PropTypes from 'prop-types';

const customObject = PropTypes.shape({
  lang: PropTypes.string,
  title: PropTypes.string,
  context: PropTypes.string,
  section: PropTypes.string.isRequired,
  parent_section: PropTypes.string,
  page: PropTypes.string,
  parent_page: PropTypes.string,
  url: PropTypes.string,
  num: PropTypes.number,
  position: PropTypes.number
});

export default customObject;
