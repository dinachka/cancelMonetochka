const express = require('express');
const morgan = require('Morgan');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
app.listen(() => {
  console.log(`server is working on ${PORT}`);
})
