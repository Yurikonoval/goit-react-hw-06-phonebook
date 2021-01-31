import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
// import types from './types';

const addContact = createAction('phonebook/addContact', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('phonebook/deleteContact');

const filterChange = createAction('phonebook/filterChange');

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name: name,
//     number: number,
//   },
// });

// const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });

// const filterChange = value => ({
//   type: types.FILTER_CHANGE,
//   payload: value,
// });

const actions = { addContact, deleteContact, filterChange };

export default actions;
