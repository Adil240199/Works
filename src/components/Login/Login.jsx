import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import { Input } from "../common/preLoader/FormsControls/FormsControls";
import { required } from "../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "./Login.module.css";


const LoginForm = (props) => {
  if (props.isAuth) {
    return <Redirect to="/profile" />;
    }
    
  return (
    <main className={s.loginPage}>
      <section className={s.loginPanel}>
        <div className={s.copy}>
          <p>Secure access</p>
          <h1>Welcome back</h1>
          <span>Open the teacher workspace to review students, profiles, and class messages.</span>
        </div>
        <Formik
            initialValues={{email: "", password: "", rememberMe: false}}
            onSubmit={(formdata) => {
                props.login(formdata.email, formdata.password, formdata.rememberMe)
            }}
        >
        
               <Form className={s.form}>
                    <div className={s.field}>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name={'email'} placeholder={'Email'} component={Input} validate={required}/>
                    </div>
                    <ErrorMessage name="email" component="div" className={s.errorText}/>

                    <div className={s.field}>
                        <label htmlFor="password">Password</label>
                        <Field id="password" name={'password'} type={"password"}placeholder={'password'} component={Input} validate={required}/>
                    </div>
                    <ErrorMessage name="password" component="div" className={s.errorText}/>

                    <div className={s.check}>
                        <Field id="rememberMe" type="checkbox" name={'rememberMe'} component={Input}/>
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>

                    <button type={'submit'}>Log in</button>
                </Form>
        

        </Formik>
      </section>
    </main>
  )
};




const mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth

})
export default connect(mapStateToProps, {login})(LoginForm)
