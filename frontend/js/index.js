import { OrdersList } from './models/ordersList.js';
import { Order } from './models/order.js';

import * as ordersListView from './views/ordersListView.js';
import * as orderView from './views/orderView.js';

import { elements } from './views/base.js'

const state = {};

const controlOrdersList = async (url) => {
	try {
		state.orders = new OrdersList(url);
		await state.orders.getOrders();
		ordersListView.renderOrdersList(state.orders.orders);
	} catch (error) {
		console.log(error);
	}
}

const controlCreateOrder = async(e, url) => {
	e.preventDefault()
	try {
		const formData = new FormData(elements.createOrderForm);
		const formProps = Object.fromEntries(formData);

		state.newOrder = new Order(url, formProps);
		state.newOrder.id = await state.newOrder.createOrder();

		orderView.renderCreateOrder(state.newOrder);
		checkDarkTheme();
	} catch (error) {
		console.log(error)
	}
}

const controlRemoveOrder = async(e, url, id) => {
	e.preventDefault();
	try {
		state.removedOrder = new Order(url, {id: id})
		await state.removedOrder.deleteOrder();

		orderView.renderDeleteOrder(id);
	} catch (error) {
		console.log(error)
	}
}

const controlUpdateOrder = async(e, url, id) => {
	state.editOrder = new Order(url, {id: id})
	orderView.renderEditOrderForm(e, id)
	
	document.querySelector(`#actions-div-${id}`).addEventListener('click', function (e) {
		if (e.target.closest('button').classList.contains('send-edit-order')) {
			state.editOrder = new Order(url, {
				id: id,
				product: document.querySelector(`#hidden-product-input-${id} input`).value,
				quantity: document.querySelector(`#hidden-quantity-input-${id} input`).value,
				price: document.querySelector(`#hidden-price-input-${id} input`).value,
				delivery_date: document.querySelector(`#hidden-delivery-date-input-${id} input`).value,
			})
			state.editOrder.updateOrder();
			orderView.renderUpdatedOrder(e, state.editOrder);
		}
	})
}


const themeSwitcher = function () {
	elements.lightThemeBtn.addEventListener('click', function() {
		state.theme = 'dark';
		elements.lightThemeBtn.hidden = true;
		elements.darkThemeBtn.hidden = false;
		elements.ordersTableHead.classList.remove('table-light');
		elements.ordersTableHead.classList.add('table-dark');
		elements.ordersTableHead.querySelectorAll('th').forEach(item => item.classList.add('table-dark'))
		elements.ordersTableBody.querySelectorAll('#orders-table td').forEach((item) => {
			item.classList.add('table-dark')
		})
		elements.documentBody.setAttribute('data-bs-theme', 'dark');
	});
	elements.darkThemeBtn.addEventListener('click', function() {
		state.theme = 'light';
		elements.darkThemeBtn.hidden = true;
		elements.lightThemeBtn.hidden = false;
		elements.ordersTableHead.classList.add('table-light');
		elements.ordersTableHead.querySelectorAll('th').forEach(item => {
			item.classList.remove('table-dark')
			item.classList.add('table-light')
		})
		elements.ordersTableBody.querySelectorAll('#orders-table th, #orders-table td').forEach((item) => {
			item.classList.remove('table-dark')
		})
		elements.documentBody.removeAttribute('data-bs-theme', 'dark');
	});
}

const checkDarkTheme = function () {
	if (state.theme == 'dark') {
		elements.ordersTableBody.querySelectorAll('#orders-table td').forEach((item) => {
			item.classList.add('table-dark')
		})
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Loading Event
window.addEventListener('load', controlOrdersList('http://localhost:3000/api/get-orders'));
window.addEventListener('load', themeSwitcher);

// Actions
elements.sendBtn.addEventListener('click', function(e) {
	controlCreateOrder(e, 'http://localhost:3000/api/create-order/')
})

elements.ordersTable.addEventListener('click', function(e) {
	if (!e.target.closest('button')) return

	if (e.target.closest('button').classList.contains('edit-order')) {
		controlUpdateOrder(e, 'http://localhost:3000/api/update-order', e.target.closest('button').id)
	}
	if (e.target.closest('button').classList.contains('delete-order')) {
		controlRemoveOrder(e, 'http://localhost:3000/api/delete-order', e.target.closest('button').id)
	}
})
