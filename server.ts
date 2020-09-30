import express from 'express';
import myfxRouter from './src/routes/myfxbook.routes';

const app = express();
app.use(express.json());
app.use(myfxRouter);

app.listen(3333, () => {
	console.log('server started on port 3333');
});
