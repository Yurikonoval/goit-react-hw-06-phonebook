import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import actions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <span className={s.labeltext}>Find contacts by name</span>
      <input
        className={s.input}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={value}
        onChange={e => dispatch(actions.filterChange(e.target.value))}
      />
    </label>
  );
}

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(actions.filterChange(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
