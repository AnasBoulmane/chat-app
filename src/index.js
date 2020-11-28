import express from 'express';
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello World');
})

app.use('/app', express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});

export default app;
