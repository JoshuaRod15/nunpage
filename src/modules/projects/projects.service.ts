import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Projects } from 'src/entity/Projects.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Projects)
    private projectsRepository: Repository<Projects>,
  ) {}

  async getAllProjects() {
    const allProjects = await this.projectsRepository.find();
    return allProjects;
  }
}
