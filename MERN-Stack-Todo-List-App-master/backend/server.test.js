const request = require('supertest');
const app = require('./server');

describe('Testes da API de Tarefas', () => {

  it('Deve retornar uma lista de tarefas no endpoint GET /todos', async () => {
    const response = await request(app).get('/todos');

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

});