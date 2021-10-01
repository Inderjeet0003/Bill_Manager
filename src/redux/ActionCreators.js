import AT from "./ActionTypes";

const AC = {
  addBill: (data) => {
    return {
      type: AT.ADD_BILL,
      payload: data,
    };
  },
  editBill: (data) => {
    return {
      type: AT.EDIT_BILL,
      payload: data,
    };
  },
  deleteBill: (data) => {
    return {
      type: AT.DELETE_BILL,
      payload: data,
    };
  },
};

export default AC;
