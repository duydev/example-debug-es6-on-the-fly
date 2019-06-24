import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const a = 5000;

  res.json(a);
});

app.listen(3000, () => {
  console.log('Server start on port ' + 3000);
});
