import { AppModule } from '../../src/app.module';
import { HttpService } from '@nestjs/axios';
import { INestApplication } from '@nestjs/common';
import { of } from 'rxjs';
import {
  mockFilms,
  mockLukeSkywalker,
  mockPlanet1,
  mockPlanet2,
  mockPlanet3,
  mockSkywalkerShip1,
  mockSkywalkerShip2,
  mockSpecies1,
  mockSpecies2,
  mockSpecies3,
} from '../mocks/rebel.mocks';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

/**
 * @group integration
 */
describe('Controller (e2e)', () => {
  const mockHttpService = {
    get: jest.fn(),
  };
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(HttpService)
      .useValue(mockHttpService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/starships (GET)', () => {
    mockHttpService.get
      .mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          data: {
            count: 1,
            next: null,
            previous: null,
            results: [mockLukeSkywalker],
          },
        }),
      )
      .mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          data: mockSkywalkerShip1,
        }),
      )
      .mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          data: mockSkywalkerShip2,
        }),
      );
    return request(app.getHttpServer())
      .get('/starships?person=Luke Skywalker')
      .expect(200)
      .expect([mockSkywalkerShip1, mockSkywalkerShip2]);
  });

  it('/classifications (GET)', () => {
    mockHttpService.get
      .mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          data: {
            count: 6,
            next: null,
            previous: null,
            results: mockFilms,
          },
        }),
      )
      .mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          data: mockSpecies1,
        }),
      )
      .mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          data: mockSpecies2,
        }),
      )
      .mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          data: mockSpecies3,
        }),
      );
    return request(app.getHttpServer())
      .get('/classifications?episode=1')
      .expect(200)
      .expect(['mammal', 'artificial']);
  });

  it('/galaxy (GET)', () => {
    mockHttpService.get
      .mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          data: {
            count: 30,
            next: 'https://swapi.dev/api/planets/?page=2',
            previous: null,
            results: [mockPlanet1],
          },
        }),
      )
      .mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          data: {
            count: 30,
            next: 'https://swapi.dev/api/planets/?page=3',
            previous: 'https://swapi.dev/api/planets/?page=1',
            results: [mockPlanet2],
          },
        }),
      )
      .mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          data: {
            count: 60,
            next: null,
            previous: 'https://swapi.dev/api/planets/?page=2',
            results: [mockPlanet3],
          },
        }),
      );
    return request(app.getHttpServer()).get('/galaxy').expect(200).expect({
      numberOfPlanets: 3,
      totalPopulation: 2000200000,
    });
  });
});
