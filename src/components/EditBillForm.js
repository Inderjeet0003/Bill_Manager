import React, { useState } from "react";
import { connect } from "react-redux";
import AC from "../redux/ActionCreators";

const EditBillForm = (props) => {
  console.log(props)
  const id = props?.match.params?.id;
  const bill = props.billsList.filter((b) => {
    console.log("b: ", b);
    return b.id === id - 0;
  });
  console.log("id: ", id, bill);
  const [state, setState] = useState({
    description: "",
    category: "",
    amount: "",
    date: "",
    id: "",
    ...bill[0],
  });
  const handleOnChange = (e) => {
    let temp = { ...state };
    temp[e.target.name] = e.target.value;
    setState({ ...temp });
  };
  const handleSubmit = () => {
    props.editBill(state);
    props.history.push("/");
  };
  return (
    <div className="col-md-6 shadow mx-auto my-5">
      <h1>Edit Bill</h1>
      <div className="name-item mb-3">
        <p>Description</p>
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleOnChange}
          value={state.description}
        />
      </div>
      <div className="item mb-3">
        <p>Category</p>
        <input
          type="text"
          name="category"
          onChange={handleOnChange}
          value={state.category}
        />
      </div>
      <div className="item mb-3">
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
        <button className="btn btn-primary mb-4" onClick={handleSubmit}>
          Save Changes
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
    editBill: (data) => dispatch(AC.editBill(data)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EditBillForm);
