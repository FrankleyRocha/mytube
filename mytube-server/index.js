const express = require("express");
const app = express();
const ytdl = require("ytdl-core");
const cors = require('cors');
const https = require('https');

const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
	return res.send("ok");
});

app.get("/info/:id", async (req, res) => {
	
	const v_id = req.params.id;
    const info = await ytdl.getInfo(v_id);
	return res.send(info);

});