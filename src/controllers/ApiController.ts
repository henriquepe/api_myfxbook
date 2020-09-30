import api from '../api';

interface LoginProps {
	data: {
		session: string;
	};
}

export default class ApiController {
	// eslint-disable-next-line class-methods-use-this
	async getOpenOrders(session: string, id: string): Promise<any> {
		const response = await api.get(
			`/api/get-open-orders.json?session=${session}&id=${id}`,
		);

		return response.data;
	}

	// eslint-disable-next-line class-methods-use-this
	async loginGetSession(email: string, password: string): Promise<string> {
		const response: LoginProps = await api.post(
			`/api/login.json?email=${email}&password=${password}`,
		);

		return response.data.session;
	}
}
