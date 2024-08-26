import { Controller, Get, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('allProjects')
  async getAllProjects() {
    return await this.projectsService.getAllProjects();
  }

  @Post('new/addNewProject')
  async addNewProject() {}
}
