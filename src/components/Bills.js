import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Bill from "./Bill";
const Bills = (props) => {
  const [category, setCat] = useState("");
  const [budget, setBud] = useState(5000);
  const [billsList, setBills] = useState([...props.billsList]);
  const filterBills = () => {
    if (category) {
      let temp = props.billsList.filter((bill) => bill.category === category);
      setBills([...temp]);
    } else setBills([...props.billsList]);
  };

  useEffect(() => {
    let sorted = [...props.billsList];
    sorted.sort((a, b) => a.amount - b.amount);
    let total = 0;
    sorted.forEach((bill, i) => {
      if (total + parseInt(bill.amount) > budget) {
        sorted[i] = { ...bill, shouldBePaid: true };
      } else {
        sorted[i] = { ...bill, shouldBePaid: false };
      }
      total += parseInt(bill.amount);
    });
    setBills([...sorted]);
    console.table(sorted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budget]);

  return (
    <div>
      <div className="m-4">
        <div>Budget : </div>
        <div>
          <input
            value={budget}
            onChange={(e) => setBud(e.target.value)}
            placeholder={"budget"}
          ></input>
        </div>
      </div>
      <div className="m-4">
        <div>Filter By : </div>
        <div>
          <input
            value={category}
            onChange={(e) => setCat(e.target.value)}
            placeholder={"Category"}
          ></input>
          <button className="btn btn-primary" onClick={filterBills}>
            Filter
          </button>
        </div>
      </div>
      <table className="table table-center text-center">
        <thead>
          <tr>
            {Object.keys(props.billsList[0]).map((key, i) => (
              <th key={i}>{key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {billsList?.map((bill, i) => (
            <tr
              key={bill.id}
              className={`${bill?.shouldBePaid ? "bg-warning" : ""}`}
            >
              <Bill {...bill} {...props}></Bill>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    billsList: state.bills.billsList,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addBill: (data) => dispatch(AC.addBill(data)),
//   };
// }
export default connect(mapStateToProps)(Bills);
