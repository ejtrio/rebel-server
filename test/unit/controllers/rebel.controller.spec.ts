import { RebelController } from '../../../src/controllers/rebel.controller';
import { RebelService } from '../../../src/services/rebel.service';
import {
  mockSkywalkerShip1,
  mockSkywalkerShip2,
} from '../../mocks/rebel.mocks';
import { Test, TestingModule } from '@nestjs/testing';

/**
 * @group unit
 */
describe('RebelController', () => {
  const mockRebelService = {
    getStarshipsForPerson: jest.fn(),
    getSpeciesClassificationForEpisode: jest.fn(),
    getGalaxySummary: jest.fn(),
  };
  let rebelController: RebelController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RebelController],
      providers: [RebelService],
    })
      .overrideProvider(RebelService)
      .useValue(mockRebelService)
      .compile();

    rebelController = app.get<RebelController>(RebelController);
  });

  describe('getStarshipsForPerson', () => {
    it('returns starship entities for the provided person', async () => {
      mockRebelService.getStarshipsForPerson.mockReturnValueOnce(
        Promise.resolve([mockSkywalkerShip1, mockSkywalkerShip2]),
      );
      const starships = await rebelController.getStarshipsForPerson(
        'Luke Skywalker',
      );
      expect(starships).toEqual([mockSkywalkerShip1, mockSkywalkerShip2]);
    });
  });

  describe('getSpeciesClassificationForEpisode', () => {
    it('returns deduped species classification list for specified episode', async () => {
      mockRebelService.getSpeciesClassificationForEpisode.mockReturnValueOnce(
        Promise.resolve(['mammal', 'artificial']),
      );
      const classifications =
        await rebelController.getSpeciesClassificationForEpisode(1);
      expect(classifications).toEqual(['mammal', 'artificial']);
    });
  });

  describe('getGalaxySummary', () => {
    it('returns json object with number of plants and total population of galaxy', async () => {
      mockRebelService.getGalaxySummary.mockReturnValueOnce(
        Promise.resolve({
          numberOfPlants: 3,
          totalPopulation: 2000200000,
        }),
      );
      const galaxy = await rebelController.getGalaxySummary();
      expect(galaxy).toEqual({
        numberOfPlants: 3,
        totalPopulation: 2000200000,
      });
    });
  });
});
