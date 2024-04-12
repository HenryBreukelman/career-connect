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

const loginButton = utils.select('.login-button')
const username = utils.select('.username')
const password = utils.select('.password')
const errorPopup = utils.select('.error-popup')

//add localstorage for this
let userUsername = 'admin@email.com'
let userPassword = 'admin'

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Functions                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function checkLogin() {
  if (username.value === userUsername && password.value === userPassword) {
    correctLogin()
  } else {
    wrongLogin()
  }
}

function correctLogin() {
  errorPopup.classList.add('hidden');
  window.location.href = 'home.html'
}

function wrongLogin() {
  errorPopup.classList.remove('hidden');
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Event Listeners                                      */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

utils.listen('click', loginButton, checkLogin);
