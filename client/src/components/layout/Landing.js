import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
  render() {
  
    const { user } = this.props.auth;
    const isLoggedIn = this.props.auth.isAuthenticated;
    let greeting;
    if (isLoggedIn) {
      greeting = <p className="flow-text"><b>{user.name}</b> is currently logged in!</p>
    }
    else {
      greeting = <p className="flow-text">No one is logged in...</p>
    }
    
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <img class="responsive-img" src="https://techwireasia.global.ssl.fastly.net/wp-content/uploads/2020/03/shutterstock_553686271-897x500.jpg" alt="farm splash"/>
          </div>
          <div className="col s12 center-align">
            <h4>
              <b>This</b> is a test of using JWT's with the {" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack.
            </h4>
            <p className="flow-text grey-text text-darken-1">
              The intent is to create a functioning login system with a persistent database utilizing JWT tokens.
            </p>

            {greeting}
            
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

// export default Landing;
export default connect(mapStateToProps)(Landing);