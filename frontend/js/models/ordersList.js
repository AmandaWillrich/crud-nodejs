class OrdersList {
	constructor(getOrdersUrl) {
		this.getOrdersUrl = getOrdersUrl;
		this.orders = []
	}

	async getOrders() {
		try {
			const response = await fetch(this.getOrdersUrl);
			const result = await response.json();

			this.orders = result.body.orders

		} catch (error) {
			console.log(error);
		}
	}
}

export { OrdersList };