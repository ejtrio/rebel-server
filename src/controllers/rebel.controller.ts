import { GalaxyEntity } from '../models/galaxy.entity';
import { RebelService } from '../services/rebel.service';
import { StarshipEntity } from '../models/starship.entity';
import { Controller, Get, Query } from '@nestjs/common';

@Controller()
export class RebelController {
  constructor(private readonly rebelService: RebelService) {}

  @Get('starships')
  public async getStarshipsForPerson(
    @Query('person') person: string,
  ): Promise<Array<StarshipEntity>> {
    return this.rebelService.getStarshipsForPerson(person);
  }

  @Get('classifications')
  public async getSpeciesClassificationForEpisode(
    @Query('episode') episode: number,
  ): Promise<Array<string>> {
    return this.rebelService.getSpeciesClassificationForEpisode(episode);
  }

  @Get('galaxy')
  public async getGalaxySummary(): Promise<GalaxyEntity> {
    return this.rebelService.getGalaxySummary();
  }
}
