import { GalaxyEntity } from '../models/galaxy.entity';
import { Injectable } from '@nestjs/common';
import { RebelRepository } from '../repositories/rebel.repository';
import { StarshipEntity } from '../models/starship.entity';

@Injectable()
export class RebelService {
  constructor(private readonly rebelRepository: RebelRepository) {}

  public async getStarshipsForPerson(
    person: string,
  ): Promise<Array<StarshipEntity>> {
    const retrievedPerson = await this.rebelRepository.getPersonByName(person);
    if (!retrievedPerson) {
      return [];
    }
    return await this.rebelRepository.getStarshipsByUrls(
      retrievedPerson.starships,
    );
  }

  public async getSpeciesClassificationForEpisode(
    episode: number,
  ): Promise<Array<string>> {
    const film = await this.rebelRepository.getFilmByEpisodeId(episode);
    if (!film) {
      return [];
    }
    const species = await this.rebelRepository.getSpeciesByUrls(film.species);
    const results = [];
    species.forEach((value) => {
      if (!results.includes(value.classification)) {
        results.push(value.classification);
      }
    });
    return results;
  }

  public async getGalaxySummary(): Promise<GalaxyEntity> {
    const planets = await this.rebelRepository.getPlanets();
    return {
      numberOfPlanets: planets.length,
      totalPopulation: planets.reduce((previousValue, currentValue) => {
        if (currentValue.population !== 'unknown') {
          return previousValue + Number(currentValue.population);
        } else {
          return previousValue;
        }
      }, 0),
    };
  }
}
