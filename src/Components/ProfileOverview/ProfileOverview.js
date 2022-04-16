import React, { Component } from 'react'
import './ProfileOverview.scss'
import Profile from '../../Models/MyProfile.json'

class ProfileOverview extends Component {
  orders = Object.values(Profile.orders).map((order) => order.modelName)
  constructor(props) {
    super(props)
    this.state = {
      forename: '',
      lastName: '',
      email: '',
      age: '',
      orders: [],
      user: [],
      loaded: false,
      editableProfile: false,
      // signedIn: false,
      // ErrorMessage: false,
      // tokenEmpty: false,
    }
    this.editProfile = this.editProfile.bind(this)
    this.profileEdited = this.profileEdited.bind(this)
    this.editForename = this.editForename.bind(this)
    this.editLastName = this.editLastName.bind(this)
    this.editEmail = this.editEmail.bind(this)
    this.editAge = this.editAge.bind(this)
    this.editPaymentMethod = this.editPaymentMethod.bind(this)
  }

  componentDidMount() {
    // GetProfile function from the backend
    if (Profile.length !== 0) {
      this.setState({ user: Profile, loaded: true })
      console.log(this.state)
    }
  }

  editForename(event) {
    let user = this.state.user
    user.forename = event.target.value
    this.setState({ forename: event.target.value })
    this.setState({ user: user })
  }

  editLastName(event) {
    let user = this.state.user
    user.lastName = event.target.value
    this.setState({ lastName: event.target.value })
    this.setState({ user: user })
  }

  editEmail(event) {
    let user = this.state.user
    user.email = event.target.value
    this.setState({ email: event.target.value })
    this.setState({ user: user })
  }

  editAge(event) {
    let user = this.state.user
    user.age = event.target.value
    this.setState({ age: event.target.value })
    this.setState({ user: user })
  }

  editPaymentMethod(event) {
    let user = this.state.user
    user.paymentMethod = event.target.value
    this.setState({ paymentMethod: event.target.value })
    this.setState({ user: user })
  }

  editProfile() {
    if (!this.editableProfile) {
      this.setState({ editableProfile: true })
    } else if (this.editableProfile) {
      this.setState({ editableProfile: false })
    }
    // console.log(Object.values(Profile)[0])
    // console.log(Profile)
  }

  profileEdited() {
    this.setState({ editableProfile: false })
    // UpdateUser.updateProfil(this.state.user);
  }

  // updateProfil() {
  // }
  render() {
    return (
      <div className="ProfileOverviewPage">
        {/* {this.state.loaded ? ( */}
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
                      placeholder={this.state.user.lastName}
                      disabled={!this.state.editableProfile}
                      value={this.state.user.lastName}
                      onChange={this.editLastName}
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
                  onClick={this.profileEdited}
                >
                  {" "}Done{" "}
                </button>
              </div>
            </div>

          <div className="Below">
            {}
            <div className="BelowRight">
              <div className="OrderHeading">
                Your Orders:
                <br></br>
              </div>
              <div className="BelowRightOrders">
                {this.orders.map((car, index) => {
                  return (
                    <li key={index}>
                      <a className={car} ref="">{car}</a>
                    </li>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        {/* ) : null} */}
      </div>
    )
  }
}

export default ProfileOverview
