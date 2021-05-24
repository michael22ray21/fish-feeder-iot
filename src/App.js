import "./App.css";
import React from "react";
import { Bar } from "react-chartjs-2";

class ReviewInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light_start_time: "18:00",
      light_end_time: "05:00",

      feeding_frequency: 1,
      feed_amount: 100,
      first_feed_time: "",
      second_feed_time: "",
      third_feed_time: "",

      turbidity_data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 0, 0, 0, 0, 0, 0],
          },
        ],
      },
      turbidity_options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Observed turbidity",
          },
        },
      },

      temperature_data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 0, 0, 0, 0, 0, 0],
          },
        ],
      },
      temperature_options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Observed temperature",
          },
        },
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="top-header-margin"></div>
        <h2 className="header">Aquariomatic</h2>
        <div className="turbidity-chart">
          <Bar
            data={this.state.turbidity_data}
            options={this.state.turbidity_options}
          />
        </div>
        <div className="temperature-chart">
          <Bar
            data={this.state.temperature_data}
            options={this.state.temperature_options}
          />
        </div>
        <form id="form1" onSubmit={this.handleSubmit}>
          <table className="config">
            <tr>
              <th>
                <h3>Penerangan</h3>
              </th>
              <th className="spacer"></th>
              <th>
                <h3>Pakan</h3>
              </th>
            </tr>
            <tr>
              <td rowSpan="3">
                <tr>
                  <td>
                    <label for="start-time-pick" className="input-label">
                      Start time
                    </label>
                  </td>
                  <td>
                    <input
                      type="time"
                      name="light_start_time"
                      value={this.state.light_start_time}
                      id="start-time-pick"
                      placeholder="Time"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="end-time-pick" className="input-label">
                      End time
                    </label>
                  </td>
                  <td>
                    <input
                      type="time"
                      name="light_end_time"
                      value={this.state.light_end_time}
                      id="end-time-pick"
                      placeholder="Time"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </td>
              <td className="spacer" rowSpan="3"></td>
              <td>
                <label className="input-label" for="quantity">
                  Jumlah pakan
                </label>
              </td>
              <td>
                <input
                  id="quantity"
                  name="feed_amount"
                  type="number"
                  value={this.state.feed_amount}
                  onChange={this.handleChange}
                ></input>
              </td>
              <td className="spacer-small" rowSpan="3"></td>
              <td>Waktu pemberian</td>
            </tr>
            <tr>
              <td>
                <label className="input-label" for="frequency">
                  Frekuensi pemberian
                </label>
              </td>
              <td>
                <input
                  id="frequency"
                  name="feeding_frequency"
                  type="number"
                  min="1"
                  max="3"
                  value={this.state.feeding_frequency}
                  onChange={this.handleChange}
                ></input>
              </td>
              <td>
                <tr>
                  <td>
                    <label className="input-label" for="first-time">
                      Pertama
                    </label>
                  </td>
                  <td>
                    <input
                      id="first-time"
                      name="first_feed_time"
                      type="time"
                      value={this.state.first_feed_time}
                      placeholder="Time"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="input-label" for="second-time">
                      Kedua
                    </label>
                  </td>
                  <td>
                    <input
                      id="second-time"
                      name="second_feed_time"
                      type="time"
                      value={this.state.second_feed_time}
                      placeholder="Time"
                      onChange={this.handleChange}
                      disabled={this.state.feeding_frequency < 2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="input-label" for="third-time">
                      Ketiga
                    </label>
                  </td>
                  <td>
                    <input
                      id="third-time"
                      name="third_feed_time"
                      type="time"
                      value={this.state.third_feed_time}
                      placeholder="Time"
                      onChange={this.handleChange}
                      disabled={this.state.feeding_frequency < 3}
                    />
                  </td>
                </tr>
              </td>
            </tr>
          </table>
          <br></br>
          <input type="submit" value="Submit" className="submit-button" />
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ReviewInput />
        </div>
      </header>
    </div>
  );
}

export default App;
