import { Component } from "react";

export default class CountDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initValue: 5,
      msg: "CountDown:",
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.decrement(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  decrement() {
    let value = this.state.initValue;
    if (value === 0 || value === "") {
      this.setState({
        initValue: "",
        msg: "Game Over",
      });
    } else {
      this.setState({
        initValue: value - 1,
      });
    }
  }

  render() {
    let state = this.state;
    return (
      <div>
        {state.msg} {state.initValue}
      </div>
    );
  }
}
