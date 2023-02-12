import PropTypes from 'prop-types';

const MAIN_URL =
  'https://pixabay.com/api/?key=32026559-3f9f047d7f40e5700adb9dfd4&image_type=photo&orientation=horizontal';
 
export const perPage = 12;

const fetchImages = async (search, page) => {
  return fetch(`${MAIN_URL}&q=${search}&page=${page}&per_page=${perPage}`)
    .then(response => response.json())
    .then(data => {

      return data;
    });
};

export default fetchImages;

fetchImages.propTypes = {
  search: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};