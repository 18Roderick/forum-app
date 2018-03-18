const chai = require('chai');

const request = require('supertest');


const app = require('../../src/app');


const expect = chai.expect;

describe('Threads endpoint', () => {
	describe('when calling GET /threads', () => {
		it('returns a list of threads', () => {
			request(app).get('/threads')
				.expect('Content-Type', /json/)
				.expect(200)
				.then(response => {
					const {	body } = response;

					expect(body.data).to.have.length(2);
					expect(body.data[0].title).to.equal('Sistema de matricula fuera de servicio');
					expect(body.data[1].title).to.equal('El problema de transporte en panama');


				});
		});


		xit('returns an empty arrays if there are no threads', () => {

		});

	});



	describe('when calling POST /', () => {

		xit('creates a new thread', () => {

		});

		xit('returns HTTP code 400 if invalid paramas are sent', () => {

		});

	});

});