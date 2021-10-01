import React from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

const MonthlyChart = (props) => {
  const options = {
    legend: {
      display: true,
      position: "bottom",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  const getlabels = (bills) => {
    let labels = [];
    bills.forEach((bill) => {
      labels.push(bill.date);
    });
    return labels;
  };
  const getData = (bills) => {
    let data = [];
    bills.forEach((bill) => {
      data.push(bill.amount);
    });
    return data;
  };
  const labels = getlabels(props.billsList);
  const data = getData(props.billsList);

  return (
    <div>
      <Line
        options={options}
        data={{
          labels: labels,
          datasets: [
            {
              label: "Monthly bill cycle",
              fill: false,
              lineTension: 0.5,
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      ></Line>
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
export default connect(mapStateToProps)(MonthlyChart);
