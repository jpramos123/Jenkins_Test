const express = require('express');
const routes = require('./routes');


app = express();

app.listen(process.env.PORT, () => {
	console.log('API listening on PORT:', process.env.PORT);
	auth();
});