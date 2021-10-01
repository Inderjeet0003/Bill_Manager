import React, { useState } from "react";
import { connect } from "react-redux";
import AC from "../redux/ActionCreators";

const AddBillForm = (props) => {
  const [state, setState] = useState({
    id: props?.billsList?.length + 1,
    description: "",
    category: "",
    amount: "",
    date: "",
  });
  const handleOnChange = (e) => {
    let temp = { ...state };
    temp[e.target.name] = e.target.value;
    setState({ ...temp });
  };
  const handleSubmit = () => {
    props.addBill(state);
    props.history.push("/");
  };
  return (
    <div className="p-4 m-4">
      <div className="name-item">
        <p>Description</p>
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleOnChange}
          value={state.description}
        />
      </div>
      <div className="item">
        <p>Category</p>
        <input
          type="text"
          name="category"
          onChange={handleOnChange}
          value={state.category}
        />
      </div>
      <div className="item">
        <p>Amount</p>
        <input
          type="text"
          name="amount"
          onChange={handleOnChange}
          value={state.amount}
        />
      </div>
      <div className="item">
        <p>Date</p>
        <input
          type="text"
          name="date"
          onChange={handleOnChange}
          value={state.date}
        />
      </div>
      <div className="m-4">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Add bill
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    billsList: state.bills.billsList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addBill: (data) => dispatch(AC.addBill(data)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddBillForm);
