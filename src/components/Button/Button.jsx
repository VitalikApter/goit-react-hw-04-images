import PropTypes from 'prop-types';
import css from './Button.module.scss';

const Button = ({loadMore}) => {
    return (
      <button type="button" className={css.Button} onClick={loadMore}>
        Load more
      </button>
    );
  };

  export default Button;

  Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
  };