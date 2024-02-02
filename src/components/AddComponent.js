import React from "react";

class AddComponent extends React.Component {
  state = {
    firstName: "",
    lastname: "",
  };
  handleOnChangeFirstNameEvent = (event) => {
    console.log("handleOnChangeFirstNameEvent", event.target.value);
    this.setState({
      firstName: event.target.value,
    });
    console.log("handleOnChangeFirstNameEvent", this.state.firstName);
  };

  handleOnChangeLastNameEvent = (event) => {
    console.log("handleOnChangeLastNameEvent", event.target.value);
    this.setState({
      lastname: event.target.value,
    });
    console.log("handleOnChangeLastNameEvent", this.state.lastname);
  };

  handleEventSubmit(event) {
    event.preventDefault();
    console.log("handleEventSubmit");
    // this.props.addNewJob({
    //   id: this.state.firstName,
    //   title: this.state.lastname,
    // });
    this.props.callApi();
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={(event) => this.handleOnChangeFirstNameEvent(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={(event) => this.handleOnChangeLastNameEvent(event)}
          />
          <br />
        </form>
        <button onClick={(event) => this.handleEventSubmit(event)}>
          Submit
        </button>
      </>
    );
  }
}

export default AddComponent;
