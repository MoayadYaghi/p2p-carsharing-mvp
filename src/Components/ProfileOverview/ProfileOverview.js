import React, { Component } from "react";
// import "./ProfileOverview.scss";

// where should I get the data from?
// import GetProfile from "../../API_Pulls/";
// import UpdateUser from "../../API_Pulls/";

class ProfileOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forename: "",
      lastname: "",
      email: "",
      age: "",
      orders: [],
      signedIn: false,
      ErrorMessage: false,
      tokenEmpty: false,
      user: [],
      loaded: false,
      editableProfile: false,
    };
    this.editProfile = this.editProfile.bind(this);
    this.profileEdited = this.profileEdited.bind(this);
    this.editForename = this.editForename.bind(this);
    this.editLastname = this.editLastname.bind(this);
    this.editEmail = this.editEmail.bind(this);
    this.editAge = this.editAge.bind(this);
    this.editPaymentMethod = this.editPaymentMethod.bind(this);
  }

  // componentDidMount() {
  //   GetProfile.getProfile().then((Response) => {
  //     console.log(Response);
  //     this.setState({ user: Response.data, loaded: true });
  //   });
  // }

  editForename(event) {
    let user = this.state.user;
    user.forename = event.target.value;
    this.setState({ forename: event.target.value });
    this.setState({ user: user });
  }

  editLastname(event) {
    let user = this.state.user;
    user.lastname = event.target.value;
    this.setState({ lastname: event.target.value });
    this.setState({ user: user });
  }

  editEmail(event) {
    let user = this.state.user;
    user.email = event.target.value;
    this.setState({ lastname: event.target.value });
    this.setState({ user: user });
  }

  editAge(event) {
    let user = this.state.user;
    user.age = event.target.value;
    this.setState({ age: event.target.value });
    this.setState({ user: user });
  }

  editPaymentMethod(event) {
    let user = this.state.user;
    user.paymentMethod = event.target.value;
    this.setState({ paymentMethod: event.target.value });
    this.setState({ user: user });
  }

  editProfile() {
    if (!this.editableProfile) {
      this.setState({ editableProfile: true });
    } else if (this.editableProfile) {
      this.setState({ editableProfile: false });
    }
  }

  profileEdited() {
    this.setState({ editableProfile: false });
    // UpdateUser.updateProfil(this.state.user);
  }

  render() {
    return (
      <div className="ProfileOverviewPage">
        {this.state.loaded ? (
          <div>
            <div className="Above">
              <div className="AboveLeft">
                <div className="InfoHeading">
                  Your Details: <br></br>
                </div>
                <div className="AboveLeftInfo">
                  <div className="AboveLeftLeft">
                    First Name
                    <input
                      className="InfoFieldsLeft"
                      type="text"
                      placeholder={this.state.user.forename}
                      disabled={!this.state.editableProfile}
                      value={this.state.user.forename}
                      onChange={this.editForename}
                    />
                    Last Name
                    <input
                      className="InfoFieldsLeft"
                      type="text"
                      placeholder={this.state.user.lastname}
                      disabled={!this.state.editableProfile}
                      value={this.state.user.lastname}
                      onChange={this.editLastname}
                    />
                    Email Address
                    <input
                      className="InfoFieldsLeft"
                      type="text"
                      placeholder={this.state.user.email}
                      disabled={!this.state.editableProfile}
                      value={this.state.user.email}
                      onChange={this.editEmail}
                    />
                    Age
                    <input
                      className="InfoFieldsLeft"
                      type="text"
                      placeholder={this.state.user.age}
                      disabled={!this.state.editableProfile}
                      value={this.state.user.age}
                      onChange={this.editAge}
                    />
                  </div>
                  <div className="AboveLeftRight">
                    Payment Method
                    <input
                      className="InfoFieldsRight"
                      type="text"
                      placeholder={this.state.user.paymentMethod}
                      disabled={!this.state.editableProfile}
                      value={this.state.user.paymentMethod}
                      onChange={this.editPaymentMethod}
                    />
                  </div>
                </div>
              </div>
              <div className="AboveRight">
                <button
                  className="EditProfileButton"
                  onClick={this.editProfile}
                >
                  {" "}Edit Profile{" "}
                </button>
                <button
                  className="EditProfileButton"
                  onClick={this.ProfilBearbeitet}
                >
                  {" "}Done{" "}
                </button>
              </div>
            </div>

            <div className="Below">
              {}
              <div className="BelowRight">
                <div className="OrderHeading">
                  Your Orders: <br></br>
                </div>
                <div className="BelowRightOrders">
                  {this.state.user.warenkorb}
                  Test <br></br>
                  Test <br></br>
                  Test <br></br>
                  Test <br></br>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ProfileOverview;
