import { elements } from './base.js';

export const renderCreateOrder = function (order) {
	let markup = `
			<tr id="order-${order.id}">
				<td id="hidden-product-input-${order.id}" class="hidden-input" hidden><input class="form-control" type="text" value="${order.product}" /></td>
				<td id="hidden-quantity-input-${order.id}" class="hidden-input" hidden><input class="form-control" type="number" value="${order.quantity}" /></td>
				<td id="hidden-price-input-${order.id}" class="hidden-input" hidden><input class="form-control" type="number" value="${order.price}" /></td>
				<td id="hidden-delivery-date-input-${order.id}" class="hidden-input" hidden><input class="form-control" type="date" value="${order.delivery_date.split('T')[0]}" /></td>

				<td id="table-product-data-${order.id}" class="table-data">${order.product}</td>
				<td id="table-quantity-data-${order.id}" class="table-data">${order.quantity}</td>
				<td id="table-price-data-${order.id}" class="table-data">R$ ${order.price.includes(',') || order.price.includes('.') ? order.price.replace('.', ',') : order.price + ',00'}</td>
				<td id="table-delivery-date-data-${order.id}" class="table-data">${new Date(order.delivery_date).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</td>
			<td>
				<div id="actions-div-${order.id}" class="d-flex flex-align-center">
					<button hidden id=${order.id} class="btn btn-sm btn-outline-success send-edit-order me-1">
						<i class="bi bi-check2-square"></i>
					</button>
					<button id=${order.id} class="btn btn-sm btn-outline-primary edit-order me-1">
						<i class="bi bi-pencil-square"></i>
					</button>
					<button id="${order.id}" class="btn btn-sm btn-outline-danger delete-order me-1">
						<i class="bi bi-trash"></i>
					</button>
			</td>
		</tr>
    `
	elements.ordersTableBody.insertAdjacentHTML("afterbegin", markup);
	clearForm();
};

export const renderDeleteOrder = function(id) {
	document.querySelector(`#order-${id}`).remove()
}

export const renderEditOrderForm = function (e, id) {
	document.querySelectorAll(`#order-${id} .hidden-input`).forEach((input) => {
		input.removeAttribute('hidden')
	})
	document.querySelectorAll(`#order-${id} .table-data`).forEach((tableData) => {
		tableData.setAttribute('hidden', true)
	})
	e.target.closest('div .edit-order').previousElementSibling.removeAttribute('hidden')
	e.target.closest('div .edit-order').setAttribute('hidden', true)
}

export const renderUpdatedOrder = function(e, order) {
	document.querySelectorAll(`#order-${order.id} .hidden-input`).forEach((input) => {
		input.setAttribute('hidden', true)
	})
	document.querySelectorAll(`#order-${order.id} .table-data`).forEach((tableData) => {
		tableData.removeAttribute('hidden')
	})
	document.querySelector(`#table-product-data-${order.id}`).innerHTML = order.product
	document.querySelector(`#table-quantity-data-${order.id}`).innerHTML = order.quantity
	document.querySelector(`#table-price-data-${order.id}`).innerHTML = `R$ ${order.price.replace('.', ',')}`
	document.querySelector(`#table-delivery-date-data-${order.id}`).innerHTML = new Date(order.delivery_date).toLocaleDateString('pt-BR', {timeZone: 'UTC'})
	e.target.closest('div .send-edit-order').nextElementSibling.removeAttribute('hidden')
	e.target.closest('div .send-edit-order').setAttribute('hidden', true)
}

const clearForm = function () {
	elements.product.value = ''
	elements.quantity.value = ''
	elements.price.value = ''
	elements.deliveryDate.value = ''
}