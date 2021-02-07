import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
        <div className="col s12 center-align">
            <img class="responsive-img" src="https://images.gmanews.tv/webpics/2018/09/640_ZZZ_091718_1_2018_09_17_07_18_25.jpg" alt="splash"/>
          </div>
          <div className="col s12 center-align">
            <h4>
              {/* <b>Your name is</b> {user.name.split(" ")[0]} */}
              <b>Your name is</b> {user.name}.
              <p className="flow-text grey-text text-darken-1">
                And you have{" "}
                <span style={{ fontFamily: "monospace" }}>SUCCESSFULLY</span> logged in!
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);