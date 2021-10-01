import AT from "../ActionTypes";
import bills from "../../db.json";
const billsList = bills?.bills;
const initialState = {
  billsList: [...billsList],
};

const deleteBill = (id, arr) => {
  let temp = arr.filter((a) => a.id !== id);
  return temp;
};
const editBill = (data, arr) => {
  let temp = [...arr];
  temp.forEach((bill, i) => {
    if (bill.id === data.id) {
      temp[i] = { ...temp[i], ...data };
    }
  });
  return temp;
};

export const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_BILL:
      return {
        ...state,
        billsList: [...state.billsList, action.payload],
      };
    case AT.DELETE_BILL:
      return {
        ...state,
        billsList: [...deleteBill(action.payload, state.billsList)],
      };
    case AT.EDIT_BILL:
      return {
        ...state,
        billsList: [...editBill(action.payload, state.billsList)],
      };
    default:
      return state;
  }
};
export default billReducer;
