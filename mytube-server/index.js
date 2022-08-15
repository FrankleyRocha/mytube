const express = require("express");
const app = express();
const ytdl = require("ytdl-core");
const cors = require('cors');
const https = require('https');

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.listen(3001, () => {
	console.log("Server is running on http://localhost:3001");
});

app.get("/", (req, res) => {

	let url = req.query.url;

	console.log(url);

	let request = https.get(url, (res_) => { 

		if (res_.statusCode !== 200) {
			console.error(`Did not get an OK from the server. Code: ${res_.statusCode}`);
			res_.resume();
			return;
		}

		let data = '';

		res_.on('data', (chunk) => {
			data += chunk;
		});

		res_.on('close', () => {
			//console.log('Retrieved all data');
			//console.log(JSON.parse(data));
			return res.send(data);
		});

	});

	//return res.send("Olá mundo!");
});

app.get("/info/:id", async (req, res) => {
	
	const v_id = req.params.id;
    const info = await ytdl.getInfo(v_id);
	return res.send(info);

});