import { SERVER_ADDRESS } from './constants';

const protocol = 'http://';
const URI = '/colectiv/';

function createRequest(httpMethod, path, headers) {
	let xhttp = new XMLHttpRequest();
	xhttp.open(httpMethod, `${protocol}${SERVER_ADDRESS}${URI}${path}`, true);
	headers.forEach((header) => {
		xhttp.setRequestHeader(header.name, header.value);
	});
	xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			return xhttp.response;
		}
	};
	return xhttp;
}

export async function postFavorite(userId, product) {
	const response = await fetch(`${protocol}${SERVER_ADDRESS}${URI}${userId}/favorites`, {
		method: 'POST',
		body: JSON.stringify(product),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
	return await response.text();
}

export async function postReview(userId, productId, nrOfStars, text) {
	if (!text) {
		return;
	}
	let productReview = {
		userId: parseInt(userId),
		productId: productId,
		nrOfStars: nrOfStars,
		text: text,
		id: 0
	};
	const response = await fetch(`${protocol}${SERVER_ADDRESS}${URI}reviews`, {
		method: 'POST',
		body: JSON.stringify(productReview),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
	return await response.text();
}

export async function postShoppingCart(userId, product) {
	const response = await fetch(`${protocol}${SERVER_ADDRESS}${URI}${userId}/shoppingcart`, {
		method: 'POST',
		body: JSON.stringify(product),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
	return await response.text();
}

export async function postUser(name, email, password) {
	const headers = [];
	headers.push({ name: 'Content-Type', value: 'application/json' });
	let userData = {
		name,
		email,
		password
	};
	let request = createRequest('POST', `users`, headers);
	const payload = JSON.stringify(userData);
	request.send(payload);
	return await request.response;
}

export async function login(email, password) {
	const response = await fetch(`${protocol}${SERVER_ADDRESS}${URI}login`, {
		method: 'POST',
		body: JSON.stringify({
			email,
			password
		}),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
	return await response.json();
}

export async function addToWatchlist(uid, product) {
	const response = await fetch(`${protocol}${SERVER_ADDRESS}${URI}${uid}/watchlist`, {
		method: 'POST',
		body: JSON.stringify(product),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
	return await response.text();
}

export async function deleteFromWatchlist(userId, productId) {
	return await fetch(`${protocol}${SERVER_ADDRESS}${URI}${userId}/watchlist/${productId}`, {
		method: 'DELETE'
	});
}

export async function deleteFavorite(userId, productId) {
	return await fetch(`${protocol}${SERVER_ADDRESS}${URI}${userId}/favorites/${productId}`, {
		method: 'DELETE'
	});
}

export async function deleteReview(review) {
	return await fetch(`${protocol}${SERVER_ADDRESS}${URI}reviews/${review.id}`, {
		method: 'DELETE',
		body: JSON.stringify(review),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
}

export async function deleteItemFromCart(uid, pid) {
	return await fetch(`${protocol}${SERVER_ADDRESS}${URI}${uid}/cart/${pid}`, {
		method: 'DELETE'
	});
}

export async function buyItemsFromCart(uid) {
	const response = await fetch(`${protocol}${SERVER_ADDRESS}${URI}${uid}/cart`, {
		method: 'DELETE'
	});
	return await response.text();
}

export async function isOnWatchlistForUID(uid, pid) {
	const response = await fetch(`${protocol}${SERVER_ADDRESS}${URI}${uid}/watchlist/${pid}`);
	return await response.text();
}

export async function checkIfFavorite(uid, pid) {
	const response = await fetch(`${protocol}${SERVER_ADDRESS}${URI}${uid}/favorites/${pid}`);
	return await response.text();
}

export async function getProducts() {
	return await fetch(`${protocol}${SERVER_ADDRESS}${URI}products/`);
}

export async function getFavorites(userId) {
	return await fetch(`${protocol}${SERVER_ADDRESS}${URI}${userId}/favorites`);
}

export async function getReviews(productId) {
	return await fetch(`${protocol}${SERVER_ADDRESS}${URI}product/${productId}/reviews`);
}

export async function getReviewsAverage(productId) {
	return await fetch(`${protocol}${SERVER_ADDRESS}${URI}product/${productId}/reviewsAverage`);
}

export async function getWatchlist(userId) {
	return await fetch(`${protocol}${SERVER_ADDRESS}${URI}${userId}/watchlist`);
}

export async function getImageForProduct(productId) {
	return await fetch(`${protocol}${SERVER_ADDRESS}${URI}product/${productId}/image`);
}

export async function getCartProducts(userId) {
	return await fetch(`${protocol}${SERVER_ADDRESS}${URI}${userId}/cart`);
}

export async function getCartProductForUser(userId, productId){
	return await fetch(`${protocol}${SERVER_ADDRESS}${URI}${userId}/cart/${productId}`);
}
