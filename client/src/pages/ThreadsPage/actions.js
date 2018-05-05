export const LOAD_THREADS_REQUEST = 'forum-app/LOAD_THREADS_REQUEST';

export const LOAD_THREADS_SUCCES = 'forum-app/LOAD_THREADS_SUCCESS';

export const LOAD_THREADS_FAILURE = 'forum-app/LOAD_THREADS_FAILURE';


export function loadThreads() {


	return dispatch => {


		const url = 'http://localhost/';


		dispatch(loadThreadsRequest);


		fetch(url)
			.then(response => {

				if (!response.ok) {

					return response.statusText;

				}

				return response.json();

			})
			.then(threads => {

				dispatch(loadThreadsSuccess(threads));

			})
			.catch((error) => {

				dispatch(loadThreadsFailure(new Error(`Error en la peticion ${error}`)));

			})
	};

}

export function loadThreadsRequest() {

	return {
		type: LOAD_THREADS_REQUEST,
	}

}

export function loadThreadsSuccess(threads) {

	return {
		type: LOAD_THREADS_SUCCES,
		payload: threads,
	}

}

export function loadThreadsFailure(error) {

	return {
		type: LOAD_THREADS_FAILURE,
		payload: error,
		error: true,
	}

}