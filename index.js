import { fetchAsync } from './async-wrapper.js'
import {
	fetchUsersRequest,
	fetchTodosRequest,
	fetchUserByIdRequest,
	createUsersRequest
} from './api.js'
import { mockUser } from './mockUser.js'

// Use them all together! <3 
const handleFetchAllClick = async () => {
	// No gross try/catch everywhere
	const [users, usersError] = await fetchAsync()(fetchUsersRequest)
	const [todos, todosError] = await fetchAsync()(fetchTodosRequest)
	const [user, userError] = await fetchAsync(1)(fetchUserByIdRequest)
	const [newUser, newUserError] = await fetchAsync(mockUser)(createUsersRequest)
}

const fetchAllButton = document.getElementById('fetch-all')
fetchAllButton.addEventListener('click', handleFetchAllClick)