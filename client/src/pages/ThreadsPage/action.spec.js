import * as actions from './actions';


describe('llamando al modulo action', () => {

	describe('function loadThreadsRequest', () => {

		it('debe retornar  forum-app/LOAD_THREADS_REQUEST', () => {

			const action = actions.loadThreadsRequest();

			expect(action.type).toBe("forum-app/LOAD_THREADS_REQUEST");

		});

	});

	describe('function loadThreadsSuccess', () => {

		it('loadThreadsSuccess debe retornar el action creator con la propiedad payload ', () => {

			const threads = [{
				title: 'foo',
				body: 'bar'
			}];

			const action = actions.loadThreadsSuccess(threads);

			expect(action.payload).toBe(threads);

		});

	});

	describe('function loadThreadsFailure', () => {

		it('loadThreadsFailure should return a Error ', () => {

			const error = new Error('error al cargar los topicos');

			const action = actions.loadThreadsFailure(error);

			expect(action.payload).toBe(error);

		});
		
	});

});