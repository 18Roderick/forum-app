const initialState = {
	threads: [],
	isLoading: false,
	errorMessage: null
};


export default (state = initialState, action) => {
	switch (action.type) {
		case 'forum-app/THREADS_LOAD_REQUEST':
			return state;

		case 'forum-app/THREADS_LOAD_SUCCESS':
			return state;

		case 'forum-app/THREADS_LOAD_FAILURE':
			return state;

		default:
			return state;

	}

};