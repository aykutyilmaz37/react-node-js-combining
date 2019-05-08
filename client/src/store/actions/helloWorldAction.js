export function getHelloWorld(val) {
	return dispatch => {
		dispatch({
			type: "HELLO_WORLD",
			payload: val
		})
	}
}