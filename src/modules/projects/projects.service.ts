import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddNewProjectDto } from 'src/dtos/AddNewProject.dto';
import { Images } from 'src/entity/Images.entity';
import { Projects } from 'src/entity/Projects.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Projects)
    private projectsRepository: Repository<Projects>,
    @InjectRepository(Images) private imagesRepository: Repository<Images>,
  ) {}

  async getAllProjects() {
    const allProjects = await this.projectsRepository.find();
    return allProjects;
  }

  async addNewProject(newProjectData: AddNewProjectDto) {
    const { images, ...projectData } = newProjectData;
    const savedProject = await this.projectsRepository.save(projectData);
    images.forEach(async (element) => {
      const newImage = {
        url: element,
        projectId: savedProject.id,
      };
      await this.imagesRepository.save(newImage);
    });

    return savedProject;
  }
}
