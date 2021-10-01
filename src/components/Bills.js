import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Bill from "./Bill";

const Bills = (props) => {
  // console.log("bills list kya h",props.billsList)
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
  }, [budget,props.billsList]);

  return (
    <div>
      <div className="m-4">
        <div><h2>Budget :</h2> </div>
        <div>
          <input
            value={budget}
            onChange={(e) => setBud(e.target.value)}
            placeholder={"budget"}
          ></input>
        </div>
      </div>
      <div className="m-4">
        <div><h3>Filter By :</h3> </div>
        <div>
          {/* <input
            value={category}
            onChange={(e) => setCat(e.target.value)}
            placeholder={"Category"}
            selectBoxOptions="Canada;Denmark;Finland;Germany;Mexico"
          >
            
          </input> */}
          <label>
        <input list="categories" name="category" value={category} placeholder="Category"  onChange={(e) => setCat(e.target.value)}/></label>
        <datalist id="categories">
          <option value="Personal Care"/>
          <option value="FoodNDining"/>
          <option value="utility"/>
          <option value="shopping"/>
          <option value="education"/>
          <option value="Travel"/>
          <option value="Food & Dining"/>
        </datalist>

          <button className="btn btn-primary ml-4" onClick={filterBills}>
            Filter
          </button>
        </div>
      </div>
      <table className="table table-center text-center">
        <thead>
          <tr>
            {Object.keys(props.billsList[0]).map((key, i) => (
              <th key={i}>{key.toUpperCase()}</th>
            ))}
            <th>ACTIONS</th>
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
