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
/*  Set Info                                             */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function setUsers(userArr) {
  setProfilePictures(userArr);
  setFullNames(userArr);
  setCities(userArr);
}

function setProfilePictures(userArr) {
  profilePictures.forEach((pic, index) => {
    pic.setAttribute('src', `${userArr[index].picture.medium}`);
  })
}

function setFullNames(userArr) {
  fullNames.forEach((fullName, index) => {
    fullName.innerText = `${userArr[index].name.first} ${userArr[index].name.last}`
  });
}

function setCities(userArr) {
  cities.forEach((city, index) => {
    city.innerText = `${userArr[index].location.city}`
  })
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Fetch Users                                          */
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

    const users = await result.json();
    const userList = users.results;
    setUsers(userList);
  } catch(error) {
    console.log(error.message);
  }
}

getUsers(URL);

