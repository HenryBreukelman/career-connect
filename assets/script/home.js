'use strict';

// This app requires a server to handle import statements
// and CORS issues
import * as utils from './utils.js';


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Selectors                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
const profilePictures = utils.selectAll('.person-container img');
const fullNames = utils.selectAll('.person-container p:nth-of-type(1)');
const cities = utils.selectAll('.person-container p:nth-of-type(2)');

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  getUsers                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
const options = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  mode: 'cors'
}

const URL = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';

async function getUsers(endpoint) {
  try {
    const result = await fetch(endpoint, options);

    if (!result.ok) {
      // number, then name of the error
      throw new Error(`${result.statusText} (${result.status})`)
    }

    const data = await result.json();
    console.log(data.results);
  } catch(error) {
    console.log(error.message);
  }
}

getUsers(URL);

