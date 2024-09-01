const request = require('supertest');
const { describe, it, expect, test } = require('@jest/globals');
const app = require('../../../app');
const FreelancerService = require('../../../services/FreelancerService');
const mockFreelancers = require('../../mocks/freelancersMock.json');

// Mock FreelancerService
jest.mock('../../../services/FreelancerService');

beforeEach(() => {
    jest.resetAllMocks();
});

describe('GET /freelancers', () => {
    it('should return a list of freelancers', async () => {
        FreelancerService.getAllFreelancers.mockResolvedValue(mockFreelancers);

        const response = await request(app).get('/freelancers');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockFreelancers);
    });    
    
    it('should return 204 No Content if no freelancers are found', async () => {
        FreelancerService.getAllFreelancers.mockResolvedValue([]); // Empty list

        const response = await request(app).get('/freelancers');
        expect(response.status).toBe(204);
        expect(response.body).toEqual({});
    });
});

describe('POST /freelancers', () => {
    it('should create a new freelancer', async () => {
        const newFreelancer = mockFreelancers[0];
        FreelancerService.createFreelancer.mockResolvedValue(newFreelancer);

        const response = await request(app).post('/freelancers').send(newFreelancer);
        expect(response.status).toBe(201);
        expect(response.body).toEqual(newFreelancer);
    });

    it('should return 400 Bad Request if required fields are missing', async () => {
        const response = await request(app).post('/freelancers').send({ name: 'Only name' });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'All fields are required');
        expect(FreelancerService.createFreelancer).not.toHaveBeenCalled();
    });
});

describe('PUT /freelancers/:id', () => {
    it('should update an existing freelancer', async () => {
        const updatedFreelancer = mockFreelancers[0];
        FreelancerService.updateFreelancer.mockResolvedValue(updatedFreelancer);

        const response = await request(app).put(`/freelancers/${updatedFreelancer.id}`).send(updatedFreelancer);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(updatedFreelancer);
    });

    it('should update only the specified field', async () => {
        const originalFreelancer = mockFreelancers[0];
        const updatedName = 'Update name';
        const updatedFreelancer = { ...originalFreelancer, name: updatedName };
        FreelancerService.updateFreelancer.mockResolvedValue(updatedFreelancer);

        const response = await request(app).put(`/freelancers/${originalFreelancer.id}`).send({ name: updatedName });
        expect(response.status).toBe(200);
        expect(response.body).toEqual(updatedFreelancer);
    });

    it('should return 400 Bad Request if no fields are provided', async () => {
        const response = await request(app).put('/freelancers/1').send({});
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'At least one field is required');
        expect(FreelancerService.updateFreelancer).not.toHaveBeenCalled();
    });
});

describe('DEL /freelancers/:id', () => {
    it('should delete an existing freelancer', async () => {
        const freelancer = mockFreelancers[0];
        FreelancerService.deleteFreelancer.mockResolvedValue();

        const response = await request(app).delete(`/freelancers/${freelancer.id}`);
        expect(response.status).toBe(204);
        expect(response.body).toEqual({});
    });
});

describe('GET /freelancers/:id', () => {
    test.each(mockFreelancers)(`should return a freelancer by id `, async (freelancer) => {
        FreelancerService.findFreelancerById.mockResolvedValue(freelancer);

        const response = await request(app).get(`/freelancers/${freelancer.id}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(freelancer);
    });

    it('should return 404 Not Found if freelancer is not found', async () => {
        FreelancerService.findFreelancerById.mockResolvedValue(null);

        const response = await request(app).get('/freelancers/1');
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Freelancer not found');
    });
});
