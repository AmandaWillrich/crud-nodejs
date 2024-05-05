import { elements } from './base.js';

export const renderOrdersList = function (orders) {
	let markup = "";
	orders.forEach((order) => {
		markup += `
			<tr id="order-${order.id}">
				<td id="hidden-product-input-${order.id}" class="hidden-input" hidden><input class="form-control" type="text" value="${order.product}" /></td>
				<td id="hidden-quantity-input-${order.id}" class="hidden-input" hidden><input class="form-control" type="number" value="${order.quantity}" /></td>
				<td id="hidden-price-input-${order.id}" class="hidden-input" hidden><input class="form-control" type="number" value="${order.price}" /></td>
				<td id="hidden-delivery-date-input-${order.id}" class="hidden-input" hidden><input class="form-control" type="date" value="${order.delivery_date.split('T')[0]}" /></td>

				<td id="table-product-data-${order.id}" class="table-data">${order.product}</td>
				<td id="table-quantity-data-${order.id}" class="table-data">${order.quantity}</td>
				<td id="table-price-data-${order.id}" class="table-data">R$ ${order.price.replace('.', ',')}</td>
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
					</div>
				</td>
			</tr>
		`
	});
	elements.ordersTableBody.insertAdjacentHTML("afterbegin", markup);
};
