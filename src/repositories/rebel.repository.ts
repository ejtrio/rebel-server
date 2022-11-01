import { AxiosResponse } from 'axios';
import { FilmEntity } from '../models/film.entity';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PersonEntity } from '../models/person.entity';
import { PlanetEntity } from '../models/planet.entity';
import { SpeciesEntity } from '../models/species.entity';
import { StarshipEntity } from '../models/starship.entity';
import { SWApiData } from '../models/swapi/data.dto';

@Injectable()
export class RebelRepository {
  constructor(private readonly httpService: HttpService) {}

  public async getPersonByName(name: string): Promise<PersonEntity | null> {
    const { data } = await firstValueFrom<
      AxiosResponse<SWApiData<PersonEntity>>
    >(this.httpService.get(`https://swapi.dev/api/people/?search=${name}`));
    if (data.count > 1) {
      throw new Error('Multiple people found');
    }
    if (data.count == 0) {
      return null;
    }
    return data.results[0];
  }

  public async getStarshipsByUrls(
    urls: Array<string>,
  ): Promise<Array<StarshipEntity>> {
    return (
      await Promise.all(
        urls.map((value) =>
          firstValueFrom<AxiosResponse<StarshipEntity>>(
            this.httpService.get(value),
          ),
        ),
      )
    ).map((value) => value.data);
  }

  public async getFilmByEpisodeId(episode: number): Promise<FilmEntity> {
    const { data } = await firstValueFrom<AxiosResponse<SWApiData<FilmEntity>>>(
      this.httpService.get(`https://swapi.dev/api/films/`),
    );
    const films = data.results.filter((value) => value.episode_id == episode);
    if (films.length == 0) {
      return null;
    }
    return films[0];
  }

  public async getSpeciesByUrls(
    urls: Array<string>,
  ): Promise<Array<SpeciesEntity>> {
    return (
      await Promise.all(
        urls.map((value) =>
          firstValueFrom<AxiosResponse<SpeciesEntity>>(
            this.httpService.get(value),
          ),
        ),
      )
    ).map((value) => value.data);
  }

  public async getPlanets(): Promise<Array<PlanetEntity>> {
    const { data } = await firstValueFrom<
      AxiosResponse<SWApiData<PlanetEntity>>
    >(this.httpService.get(`https://swapi.dev/api/planets/`));
    const numberOfPages = Math.ceil(data.count / 10);
    const urls = [];
    for (let i = 2; i <= numberOfPages; i++) {
      urls.push(`https://swapi.dev/api/planets/?page=${i}`);
    }
    const remainingPlanets = await this.getPlanetsByPageUrls(urls);
    return data.results.concat(remainingPlanets);
  }

  public async getPlanetsByPageUrls(
    urls: Array<string>,
  ): Promise<Array<PlanetEntity>> {
    return (
      await Promise.all(
        urls.map((value) =>
          firstValueFrom<AxiosResponse<SWApiData<PlanetEntity>>>(
            this.httpService.get(value),
          ),
        ),
      )
    )
      .map((value) => value.data.results)
      .flatMap((value) => value);
  }
}
