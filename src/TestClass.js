import React, {Component} from "react";

let someVariable = 5;

class TestClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotelIsCool: false
    };
  }

  testFunction() {
    const hotel = "Omni";
    this.otherFunction(hotel);
    this.setState({
      hotelIsCool: !this.state.hotelIsCool
    });
  }

  otherFunction(firstArg) {
    console.log(firstArg);
    console.log(this.state.hotelIsCool);
  }

  render() {

    return (
      <div className="someClassName">
        Test {this.state.hotelIsCool}
      </div>
    );
  }
}
