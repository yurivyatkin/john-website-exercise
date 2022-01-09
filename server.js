import path from 'path';

import express from 'express';

// https://stackoverflow.com/a/28279609/1008341
const __dirname = process.cwd();

const app = express();

app.use(express.static(path.join(__dirname, './dist')));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

const port = process.env.PORT || 9000;

app.listen(port);

console.log(`Server listening on http://localhost:${port}`);
