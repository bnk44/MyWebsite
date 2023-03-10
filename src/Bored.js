import React from "react";
import axios from "axios";

class Bored extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activityInfo: undefined,
    };
  }

  componentDidMount() {
    this.getActivity();
  }

  getActivity = () => {
    axios.get("https://www.boredapi.com/api/activity").then((response) => {
      this.setState({ activityInfo: response.data });
    });
  };

  render() {
    return (
      <div className="Bored">
        <button
          className="button-51"
          onClick={this.getActivity}
        >
          Reroll a task
        </button>
        {this.state.activityInfo && (
          <div>
            <p>
              <strong>Name: </strong>
              {this.state.activityInfo.activity}
            </p>

            <p>
              <strong>Type: </strong>
              {this.state.activityInfo.type}
            </p>
            <p>
              <strong>Participantes: </strong>
              {this.state.activityInfo.participants}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Bored;
