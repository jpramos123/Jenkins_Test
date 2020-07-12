const express = require('express');
require('dotenv').config()

app = express();

app.listen(process.env.PORT, process.env.SERVER_IP, () => {
	console.log('API listening on PORT:', process.env);
});