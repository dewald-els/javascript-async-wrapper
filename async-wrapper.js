export const fetchAsync = (params = null) => async fetchRequest => {
	try {
		const data = await fetchRequest(params)
		return [data, null]
	}
	catch (error) {
		return [null, error]
	}
}

