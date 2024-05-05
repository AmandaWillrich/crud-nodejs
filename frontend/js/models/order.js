class Order {
	constructor(orderUrl, { product, quantity, price, delivery_date, id=null }) {
		this.orderUrl = orderUrl;

		this.id = id
		this.product = product;
		this.quantity = quantity;
		this.price = price;
		this.delivery_date = delivery_date;
	}

	async createOrder() {
		try {
			const response = await fetch(this.orderUrl, {
				method: "POST",
				body: this.getParams()
			});
			const result = await response.json();
			this.id = result.body.order.id
			return this.id
		} catch (error) {
			console.log(error);
		}
	}
	
	async deleteOrder() {
		try {
			const url = `${this.orderUrl}/${this.id}`
			const response = await fetch(url, {
				method: "POST"
			})
		} catch (error) {
			console.log(error)
		}
	}

	async updateOrder() {
		try {
			const url = `${this.orderUrl}/${this.id}`

			const response = await fetch(url, {
				method: "POST",
				body: this.getParams()
			});
		} catch (error) {
			console.log(error)
		}
	}

	getParams() {
		const data = new URLSearchParams();
		data.append('product', this.product);
		data.append('quantity', this.quantity);
		data.append('price', this.price);
		data.append('delivery_date', this.delivery_date);
		return data
	}
}

export { Order };