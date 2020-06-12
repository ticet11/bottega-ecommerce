import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../FormFields";

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
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
                 <Field
                 onClick={() => console.log('Logging in')}
                    className="sign-in-form__login"
                    name='login'
                    component={FormButton}
                    type='submit'
                    title='Login'
                    placeholder='Login'
                />
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: "SignInForm",
})(SignInForm);

export default SignInForm;
