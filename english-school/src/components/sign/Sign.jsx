import React from 'react';
import './sign.scss';

const Sign = () => {
   return (
      <div className='blockSign'>
           <div className="container_sign">
          <h1>Log in to your account</h1>
          <div className="facebook_link">
            <img className="facebook_svg" src="#" alt="facebook" />
            <a className="text_facebook" href="#">Sign In with Facebook</a>
          </div>
          <div className="google_link">
            <img className="google_svg" src="#" alt="google" />
            <a className="text_google" href="#">Sign In with Google</a>
          </div>
          <div className="lines">
            <span className="line"></span>
            <p className="some_text">or</p>
            <span className="line"></span>
          </div>
          <form className="sign">
            <p className="sgn_text">E-mail <br /> <input className="email" type="email" name="login" /></p>
            <p className="sgn_text">Password <br /> <input className="password" type="password" name="pass" /></p>
            <p><input className="submit" type="submit" value="Sign In" /></p>
          </form>
          <a href="#" className="forgot_psw">Forgot Your Password?</a>
          <p className="regis">Don&#8217;t have an account?<a href="#" className="regis_link">Register</a></p>
        </div>
      </div>
       );
    };
    

export default Sign;