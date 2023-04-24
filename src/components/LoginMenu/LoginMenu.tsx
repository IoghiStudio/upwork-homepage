import React from 'react';
import './LoginMenu.scss';

export const LoginMenu = () => {
  return (
    <div className="loginmenu">
      <div className="loginmenu__login">
        Log In
      </div>

      <div className="loginmenu__signup">
        Sign Up
      </div>
    </div>
  );
}