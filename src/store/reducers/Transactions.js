import {ADD_TRANSACTION, DELETE_TRANSACTION} from '../actions/types';

const initialstate = {
  transactions: [
    {id: 1, title: 'Soup', price: -20},
    {id: 2, title: 'Amala Soup', price: -40},
    {id: 3, title: 'Paypal', price: 400},
    {id: 4, title: 'Bank', price: 2000},
    {id: 5, title: 'Drink Garri', price: -60},
  ],
};

export default (state = initialstate, {type, payload}) => {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== payload,
        ),
      };
    default:
      return state;
  }
};
