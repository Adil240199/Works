import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/login-reducer';

const LoginForm = () => {
  const dispatch = useDispatch();
  const submit = (values, {setSubmitting}) => {
    dispatch(loginUser(values));
          setSubmitting(false);
  }
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Введите email';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Некорректный email';
          }
          if (!values.password) {
            errors.password = 'Введите пароль';
          }
          return errors;
        }}
        onSubmit={submit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <div style={{ color: 'red' }}>{errors.email}</div>
              )}
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <div style={{ color: 'red' }}>{errors.password}</div>
              )}
            </div>

            <button type="submit" disabled={isSubmitting}>
              Войти
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
