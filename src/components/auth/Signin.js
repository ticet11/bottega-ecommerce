import React, { Component } from "react";

import SignInForm from "./SignInForm";
import PageTitle from "../PageTitle";

class SignIn extends Component {
    onSubmit = (fields) => {
        console.log(fields);
    };
    render() {
        return (
            <div className="sign-in">
                <PageTitle
                    className="sign-in__page-title"
                    title="Login"
                />
                <SignInForm
                    onSubmit={this.onSubmit}
                    className="sign-in__form"
                />
            </div>
        );
    }
}

export default SignIn;
