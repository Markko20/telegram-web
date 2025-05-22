import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (_, res) => {
  res.send('Telegram Web Backend is working');
});

app.listen(PORT, () => {
  console.log(`Server is rudnning on http://localhost:${PORT}`);
});

console.log('test linter');
