import React from "react";
import { connect } from "react-redux";
import AC from "../redux/ActionCreators";

const Bill = (props) => {
  return (
    <>
      <td>{props?.id}</td>
      <td>{props?.description}</td>
      <td>{props?.category}</td>
      <td>{props?.amount}</td>
      <td>{props?.date}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => props.history.push(`/edit-bill/${props.id}`)}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => props?.deleteBill(props.id)}
        >
          Delete
        </button>
      </td>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBill: (id) => dispatch(AC.deleteBill(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
