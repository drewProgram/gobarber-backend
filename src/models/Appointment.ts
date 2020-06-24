// Entity - something that will be saved on the db
// PrimaryGeneratedColumn - use in the id to indicates that the id is generated
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// the decorator sends the class as a param to the Entity
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
