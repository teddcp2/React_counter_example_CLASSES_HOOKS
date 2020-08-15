import React, { useState, Fragment, Component } from "react";

// Functional Component [HOOKS]
const ContainerHooks = () => {
  let [value, setValue] = useState(0);

  return (
    <Fragment>
      <div className="ui card">
        <div class="ui label">
          <a class="item">
            <h5 className="">
              Value&nbsp;
              <a class="ui red label circular ">{value}</a>
            </h5>
          </a>
        </div>

        <div class="extra content">
          <div class="ui two buttons">
            <button
              className="ui basic green button"
              onClick={() => setValue(value + 1)}
            >
              increment
            </button>
            <button
              className="ui basic green button"
              onClick={() => setValue(value - 1)}
            >
              decrement
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// Class Component
class ContainerClass extends Component {
  state = { value: 0 };
  onIncrement = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };

  onDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <Fragment>
        <div className="ui card">
          <div class="ui label">
            <a class="item">
              <h5 className="">
                Value&nbsp;
                <a class="ui red label circular ">{this.state.value}</a>
              </h5>
            </a>
          </div>

          <div class="extra content">
            <div class="ui two buttons">
              <button
                className="ui basic green button"
                onClick={this.onIncrement}
              >
                increment
              </button>
              <button
                className="ui basic green button"
                onClick={this.onDecrement}
              >
                decrement
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export { ContainerClass, ContainerHooks };
