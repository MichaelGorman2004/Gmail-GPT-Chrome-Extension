const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
