export const asyncWrapper = async (asyncFunction, params = null) => {
	try {
		const data = await asyncFunction(params)
		return [data, null]
	}
	catch (error) {
		return [ null, error ]
	}
}