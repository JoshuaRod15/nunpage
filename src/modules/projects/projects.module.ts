import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projects } from '../../entity/Projects.entity';
import { Images } from 'src/entity/Images.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Projects, Images])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
