import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class GoogleLoginButton extends Component {
  render() {
    const responseGoogleSuccess = response => {
      console.log(response);
      if (response.profileObj) {
        localStorage.setItem("goog_avatar_url", response.profileObj.imageUrl);
        localStorage.setItem("goog_name", response.profileObj.name);
      }
      this.props.convertGoogleToken(response.Zi.access_token);
    };
    const responseGoogleFailure = response => {
      console.log(response);
    };
    console.log("GoogleLoginButton PROPS", this.props);
    return (
      <GoogleLogin
        clientId="254472747355-6umtrkcedqn00tg7ec17l705ftttam0r.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        className="btn btn-secondary"
        prompt="select_account"
        isSignedIn="true"
      />
    );
  }
}

export default GoogleLoginButton;
