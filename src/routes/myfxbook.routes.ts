import { Router, Request, Response } from 'express';

import ApiController from '../controllers/ApiController';

const myfxRouter = Router();

const apiController = new ApiController();

myfxRouter.get('/login', async (request, response) => {
	const { email, password } = request.body;

	const dataResponse = await apiController.loginGetSession(email, password);

	return response.json({ session: dataResponse });
});

myfxRouter.get('/getorders', async (request: Request, response: Response) => {
	const { session, id } = request.body;

	const dataResponse = await apiController.getOpenOrders(session, id);

	return response.json({ orders: dataResponse });
});

export default myfxRouter;
