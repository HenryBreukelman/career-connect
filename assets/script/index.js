'use strict';

// This app requires a server to handle import statements
// and CORS issues
import * as utils from './utils.js';


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Organizer                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Selectors                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const loginButton = utils.select('.login-button');
const username = utils.select('.username');
const password = utils.select('.password');
const errorPopup = utils.select('.error-popup');

const user = {
  userUsername: 'admin@email.com',
  userPassword: 'admin'
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Functions                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function setUserInfo() {
  localStorage.setItem('user', JSON.stringify(user));
}

function checkLogin() {
  let savedUser = localStorage.getItem('user');
  let userInfo = JSON.parse(savedUser);
  if (
    username.value.trim() === userInfo.userUsername && password.value.trim() === userInfo.userPassword
  ) {
    correctLogin();
  } else {
    wrongLogin();
  }
}

function correctLogin() {
  errorPopup.classList.add('hidden');
  window.location.href = 'home.html';
}

function wrongLogin() {
  errorPopup.classList.remove('hidden');
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Event Listeners                                      */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

utils.listen('click', loginButton, checkLogin);
utils.listen('load', window, setUserInfo);