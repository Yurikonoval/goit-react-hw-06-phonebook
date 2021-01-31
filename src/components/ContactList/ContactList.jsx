import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(actions.deleteContact(id));
  };

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.contactData}>
            {name}: {number}
          </p>
          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDelete: id => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};
