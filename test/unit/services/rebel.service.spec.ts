import { RebelRepository } from '../../../src/repositories/rebel.repository';
import { RebelService } from '../../../src/services/rebel.service';
import {
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
describe('RebelService', () => {
  const mockRebelRepository = {
    getPersonByName: jest.fn(),
    getStarshipsByUrls: jest.fn(),
    getFilmByEpisodeId: jest.fn(),
    getSpeciesByUrls: jest.fn(),
    getPlanets: jest.fn(),
  };
  let rebelService: RebelService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [RebelService, RebelRepository],
    })
      .overrideProvider(RebelRepository)
      .useValue(mockRebelRepository)
      .compile();

    rebelService = app.get<RebelService>(RebelService);
  });

  describe('getStarshipsForPerson', () => {
    it('returns starship entities for the provided person', async () => {
      mockRebelRepository.getPersonByName.mockReturnValueOnce(
        Promise.resolve(mockLukeSkywalker),
      );
      mockRebelRepository.getStarshipsByUrls.mockReturnValueOnce(
        Promise.resolve([mockSkywalkerShip1, mockSkywalkerShip2]),
      );
      const starships = await rebelService.getStarshipsForPerson(
        'Luke Skywalker',
      );
      expect(starships).toEqual([mockSkywalkerShip1, mockSkywalkerShip2]);
    });
  });

  describe('getSpeciesClassificationForEpisode', () => {
    it('returns deduped species classification list for specified episode', async () => {
      mockRebelRepository.getFilmByEpisodeId.mockReturnValueOnce(
        Promise.resolve(mockFirstEpisode),
      );
      mockRebelRepository.getSpeciesByUrls.mockReturnValueOnce(
        Promise.resolve([mockSpecies1, mockSpecies2, mockSpecies3]),
      );
      const classifications =
        await rebelService.getSpeciesClassificationForEpisode(1);
      expect(classifications).toEqual(['mammal', 'artificial']);
    });
  });

  describe('getGalaxySummary', () => {
    it('returns json object with number of plants and total population of galaxy', async () => {
      mockRebelRepository.getPlanets.mockReturnValueOnce(
        Promise.resolve([mockPlanet1, mockPlanet2, mockPlanet3]),
      );
      const galaxy = await rebelService.getGalaxySummary();
      expect(galaxy).toEqual({
        numberOfPlanets: 3,
        totalPopulation: 2000200000,
      });
    });
  });
});
