// @ts-check

import { asyncWrapper } from './async-wrapper.js'
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
	const [users, usersError] = await asyncWrapper(fetchUsersRequest)
	const [todos, todosError] = await asyncWrapper(fetchTodosRequest)
	const [user, userError] = await asyncWrapper(fetchUserByIdRequest, 1)
	const [newUser, newUserError] = await asyncWrapper(createUsersRequest, mockUser)
}

const fetchAllButton = document.getElementById('fetch-all')
fetchAllButton.addEventListener('click', handleFetchAllClick)