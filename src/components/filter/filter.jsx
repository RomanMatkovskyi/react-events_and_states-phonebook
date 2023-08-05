import s from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <p className={s.filtertitle}>Find contacts by name</p>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
