import React, { useEffect } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

import logo from "./logo.png";
import dropdown from "./dropdown.svg";
import profile from "./profile.svg";
import info from "./info.svg";
import rupee from "./rupee.svg";
import tick from "./tick.svg";
import tickGreen from "./tick-green.svg";
import eye from "./eye.svg";
import download from "./download.svg";

function App() {
  const performanceData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65], //Input data here
        fill: true,
        lineTension: 0.5,
        backgroundColor: gradient,
        borderColor: "#087ACC",
        borderWidth: 1,
      },
    ],
  };

  const performanceOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const payoutData = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Washing and cleaning",
        data: [0, 8, 6, 0, 8, 6],
        backgroundColor: "#179CF0",
      },
      {
        label: "Traffic tickets",
        data: [0, 2, 3, 1, 8, 6],
        backgroundColor: "#087ACC",
      },
      {
        label: "Tolls",
        data: [0, 1, 3, 2, 8, 6],
        backgroundColor: "#9EBFD5",
      },
    ],
  };

  const payoutOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const performanceChart = React.createRef();

  var gradient;

  useEffect(() => {
    gradient = performanceChart.current.ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "rgba(10, 126, 208, 0.33)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  }, []);

  return (
    <>
      <nav>
        <div className="container">
          <a href="#">
            <img src={logo} width="33" height="38" />
          </a>
          <ul className="menu middle">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              Agents <img src={dropdown} />
              <ul>
                <li>
                  <a href="#">Sample 1</a>
                </li>
                <li>
                  <a href="#">Sample menu 2</a>
                </li>
                <li>
                  <a href="#">Sample menu item 3</a>
                </li>
                <li>
                  <a href="#">Sample 4</a>
                </li>
              </ul>
            </li>
            <li>
              Incentives <img src={dropdown} />
              <ul>
                <li>
                  <a href="#">Sample 1</a>
                </li>
                <li>
                  <a href="#">Sample menu 2</a>
                </li>
                <li>
                  <a href="#">Sample menu item 3</a>
                </li>
                <li>
                  <a href="#">Sample 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Earnings Calculator</a>
            </li>
            <li>
              Users <img src={dropdown} />
              <ul>
                <li>
                  <a href="#">Sample 1</a>
                </li>
                <li>
                  <a href="#">Sample menu 2</a>
                </li>
                <li>
                  <a href="#">Sample menu item 3</a>
                </li>
                <li>
                  <a href="#">Sample 4</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="menu right">
            <li>
              <img src={profile} className="profile" /> Amol Giri
              <img src={dropdown} />
              <ul>
                <li>
                  <a href="#">Sample 1</a>
                </li>
                <li>
                  <a href="#">Sample menu 2</a>
                </li>
                <li>
                  <a href="#">Sample menu item 3</a>
                </li>
                <li>
                  <a href="#">Sample 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main">
        <div className="container">
          <div className="col-4">
            <div className="stat-box">
              <p>
                Quick View: Incentives: <img src={info} className="info" />
              </p>
              <div className="content">
                <div className="col">
                  <h5>
                    <img src={rupee} /> Current Incentive Earned
                  </h5>
                  <h2>26,255/-</h2>
                </div>
                <div className="col">
                  <h5>
                    <img src={rupee} /> Last Cycle Incentive
                  </h5>
                  <h2>
                    8,495/-
                    <button>
                      <img src={tick} /> Accept
                    </button>
                  </h2>
                </div>
              </div>
            </div>
            <div className="stat-box">
              <p>
                Sales Achievements: <img src={info} className="info" />
              </p>
              <div className="content">
                <div className="col">
                  <h5>Current Sales Achieved</h5>
                  <h2>
                    80% <span>(₹45,400,39)</span>
                  </h2>
                </div>
                <div className="col">
                  <h5>
                    <img src={rupee} /> Target Sales
                  </h5>
                  <h2>56,75,048/-</h2>
                </div>
              </div>
            </div>
            <div className="stat-box">
              <p>
                Ongoing Incentive Structure: <img src={info} className="info" />
              </p>
              <div className="content">
                <div className="col no-border text-right">
                  <p>
                    Payout Frequency<span>:</span>
                  </p>
                  <p>
                    Targets<span>:</span>
                  </p>
                  <p>
                    Manager<span>:</span>
                  </p>
                  <p>
                    Eligibility Criteria<span>:</span>
                  </p>
                </div>
                <div className="col">
                  <p>Monthly</p>
                  <p>₹45,000/-</p>
                  <p>Smriti Patel</p>
                  <p>
                    <img src={tickGreen} />
                  </p>
                </div>
              </div>
            </div>
            <div className="stat-box">
              <p>
                Attendance Summary: <img src={info} className="info" />
              </p>
              <div className="content">
                <div className="col-1-4 score">
                  <h2>43.4</h2>
                  <h5>Current Score</h5>
                </div>
                <div className="col-3-4">
                  <div className="progress">
                    <div style={{ width: "80%" }}></div>
                  </div>
                  <h5>Incentive Eligibility Tracker</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="chart-box">
              <h2>Daily Performance Graph / 2021</h2>
              <select>
                <option disabled>Month Wise Summary</option>
              </select>
              <img className="arrow" src={dropdown} />
              <div className="chart">
                <div className="chart-container">
                  <Chart
                    type="line"
                    ref={performanceChart}
                    data={performanceData}
                    options={performanceOptions}
                  />
                </div>
              </div>
            </div>
            <div className="chart-box-2">
              <h2>Payouts</h2>
              <select>
                <option disabled>6 Month Summary</option>
              </select>
              <img className="arrow" src={dropdown} />
              <div className="chart">
                <Chart type="bar" data={payoutData} options={payoutOptions} />
              </div>
            </div>
            <div className="table-box">
              <h2>Leaderboard</h2>
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Region</th>
                  <th>Sale Value</th>
                  <th>Sale Count / Target</th>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Akshay Pathak</td>
                  <td>Nashik, MH</td>
                  <td>₹45,000/-</td>
                  <td>
                    42 / 50
                    <button>
                      <img src={eye} />
                      Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Akshay Pathak</td>
                  <td>Nashik, MH</td>
                  <td>₹45,000/-</td>
                  <td>
                    42 / 50
                    <button>
                      <img src={eye} />
                      Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Akshay Pathak</td>
                  <td>Nashik, MH</td>
                  <td>₹45,000/-</td>
                  <td>
                    42 / 50
                    <button>
                      <img src={eye} />
                      Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Akshay Pathak</td>
                  <td>Nashik, MH</td>
                  <td>₹45,000/-</td>
                  <td>
                    42 / 50
                    <button>
                      <img src={eye} />
                      Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Akshay Pathak</td>
                  <td>Nashik, MH</td>
                  <td>₹45,000/-</td>
                  <td>
                    42 / 50
                    <button>
                      <img src={eye} />
                      Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Akshay Pathak</td>
                  <td>Nashik, MH</td>
                  <td>₹45,000/-</td>
                  <td>
                    42 / 50
                    <button>
                      <img src={eye} />
                      Details
                    </button>
                  </td>
                </tr>
              </table>
              <button>
                <img src={download} />
                Download .XLS
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <p>Copyright © 2019 GoExtendo All Rights Reserved</p>
          <p>Contact Support : help@powerpay.com | 1800 301 333</p>
        </div>
      </footer>
    </>
  );
}

export default App;
