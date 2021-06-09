const handleResponse = response => response.json()

export const fetchUsersRequest = () => {
	return fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
}

export const createUsersRequest = user => {
	return fetch('https://jsonplaceholder.typicode.com/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
		.then(response => response.json())
}

export const fetchTodosRequest = () => {
	return fetch('https://jsonplaceholder.typicode.com/todos')
		.then(handleResponse)
}

export const fetchUserByIdRequest = id => {
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then(handleResponse)
}

const fetchTodoByIdRequest = id => {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then(handleResponse)
}