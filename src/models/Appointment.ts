// Entity - something that will be saved on the db
// PrimaryGeneratedColumn - use in the id to indicates that the id is generated
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';

// the decorator sends the class as a param to the Entity
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  // this property indicates which model will participate in the relationship
  // and what is the type of relationship
  // a user can have multiples appointments
  @ManyToOne(() => User)
  // which column will identify who is the provider of this appointment
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
