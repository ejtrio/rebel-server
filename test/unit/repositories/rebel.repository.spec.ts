import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { RebelRepository } from '../../../src/repositories/rebel.repository';
import {
  mockFilms,
  mockFirstEpisode,
  mockLukeSkywalker,
  mockPlanet1,
  mockPlanet2,
  mockPlanet3,
  mockSkywalkerShip1,
  mockSkywalkerShip2,
  mockSpecies1,
  mockSpecies2,
  mockSpecies3,
} from '../../mocks/rebel.mocks';
import { Test, TestingModule } from '@nestjs/testing';

/**
 * @group unit
 */
describe('RebelRepository', () => {
  const mockHttpService = {
    get: jest.fn(),
  };
  let rebelRepository: RebelRepository;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [HttpService, RebelRepository],
    })
      .overrideProvider(HttpService)
      .useValue(mockHttpService)
      .compile();

    rebelRepository = app.get<RebelRepository>(RebelRepository);
  });

  describe('getPersonByName', () => {
    it('returns person data for provided name', async () => {
      mockHttpService.get.mockReturnValueOnce(
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
      );
      const person = await rebelRepository.getPersonByName('');
      expect(person).toEqual(mockLukeSkywalker);
    });
  });

  describe('getStarshipsByUrls', () => {
    it('returns starship data for provided urls', async () => {
      mockHttpService.get
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
      const starships = await rebelRepository.getStarshipsByUrls([
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/22/',
      ]);
      expect(starships).toEqual([mockSkywalkerShip1, mockSkywalkerShip2]);
    });
  });

  describe('getFilmByEpisodeId', () => {
    it('returns film data for provided episode number', async () => {
      mockHttpService.get.mockReturnValueOnce(
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
      );
      const film = await rebelRepository.getFilmByEpisodeId(1);
      expect(film).toEqual(mockFirstEpisode);
    });
  });

  describe('getSpeciesByUrls', () => {
    it('returns species data for provided urls', async () => {
      mockHttpService.get
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
      const species = await rebelRepository.getSpeciesByUrls([
        'https://swapi.dev/api/species/1/',
        'https://swapi.dev/api/species/2/',
        'https://swapi.dev/api/species/6/',
      ]);
      expect(species).toEqual([mockSpecies1, mockSpecies2, mockSpecies3]);
    });
  });

  describe('getPlanets', () => {
    it('returns all planet data', async () => {
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
      const planets = await rebelRepository.getPlanets();
      expect(planets).toEqual([mockPlanet1, mockPlanet2, mockPlanet3]);
    });
  });

  describe('getPlanetsByPageUrls', () => {
    it('returns planet data for provided page urls', async () => {
      mockHttpService.get
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
      const planets = await rebelRepository.getPlanetsByPageUrls([
        'https://swapi.dev/api/planets/?page=2',
        'https://swapi.dev/api/planets/?page=3',
      ]);
      expect(planets).toEqual([mockPlanet2, mockPlanet3]);
    });
  });
});
