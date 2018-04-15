const initialState = {
	threads: [],
	isLoading: false,
	errorMessage: null
};


export default (state = initialState, action) => {
	switch (action.type) {
		case 'THREADS_LOAD_REQUEST':
			return state;

		case 'THREADS_LOAD_SUCCESS':
			return state;

		case 'THREADS_LOAD_FAILURE':
			return state;

		default:
			return state;

	}

};