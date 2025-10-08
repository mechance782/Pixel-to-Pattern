import express from 'express';
import cors from 'cors';
import router from './routes/router.js';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});