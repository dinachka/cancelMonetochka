const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(() => {
  console.log(`server is working on ${PORT}`);
});
