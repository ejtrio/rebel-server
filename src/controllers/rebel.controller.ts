import { GalaxyEntity } from '../models/galaxy.entity';
import { RebelService } from '../services/rebel.service';
import { StarshipEntity } from '../models/starship.entity';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';

@Controller('/rebel')
export class RebelController {
  constructor(private readonly rebelService: RebelService) {}

  @Get('/starships')
  public async getStarshipsForPerson(
    @Query('person') person: string,
  ): Promise<Array<StarshipEntity>> {
    try {
      return await this.rebelService.getStarshipsForPerson(person);
    } catch (e) {
      if (e.message === 'Multiple people found') {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'Multiple people found',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      if (e.message === 'Person not found') {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Person not found',
          },
          HttpStatus.NOT_FOUND,
        );
      }
    }
  }

  @Get('/classifications')
  public async getSpeciesClassificationForEpisode(
    @Query('episode') episode: number,
  ): Promise<Array<string>> {
    if (isNaN(episode)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Episode must be a number',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.rebelService.getSpeciesClassificationForEpisode(episode);
  }

  @Get('/galaxy')
  public async getGalaxySummary(): Promise<GalaxyEntity> {
    return this.rebelService.getGalaxySummary();
  }
}
