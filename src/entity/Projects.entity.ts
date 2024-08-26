import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Images } from './Images.entity';

@Entity()
export class Projects {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  name: string;

  @Column({ type: 'date', nullable: true })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @Column({ type: 'text', nullable: false })
  description: string;

  @OneToMany(() => Images, (images) => images.project)
  images: Images[];
}
