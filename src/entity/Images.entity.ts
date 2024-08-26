import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Projects } from './Projects.entity';

@Entity()
export class Images {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  url: string;

  @ManyToOne(() => Projects, (projects) => projects.images)
  project: Projects;
}
