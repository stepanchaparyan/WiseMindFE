import PropTypes from 'prop-types';

const customObject = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  lang: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  section: PropTypes.string.isRequired,
  parent_section: PropTypes.string,
  page: PropTypes.string,
  parent_page: PropTypes.string,
  url: PropTypes.string,
  number: PropTypes.string
});

export default customObject;
