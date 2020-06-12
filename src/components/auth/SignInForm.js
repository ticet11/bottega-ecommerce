import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput } from "../FormFields";

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={`${className} sign-in-form`}>
                <Field
                    className="sign-in-form__email"
                    name='email'
                    component={FormInput}
                    type='email'
                    title='E-mail'
                    placeholder='E-mail'
                />
                <Field
                    className="sign-in-form__password"
                    name='password'
                    component={FormInput}
                    type='password'
                    title='Password'
                    placeholder='Password'
                />
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: "SignInForm",
})(SignInForm);

export default SignInForm;
