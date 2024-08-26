import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { AddNewProjectDto } from 'src/dtos/AddNewProject.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('allProjects')
  async getAllProjects() {
    return await this.projectsService.getAllProjects();
  }

  @UsePipes(new ValidationPipe())
  @Post('new/addNewProject')
  async addNewProject(@Body() newProjectData: AddNewProjectDto) {
    const newProjectCreated =
      await this.projectsService.addNewProject(newProjectData);
    return newProjectCreated;
  }
}
