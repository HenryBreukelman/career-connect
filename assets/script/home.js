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

