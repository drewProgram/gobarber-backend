import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
// extending the class to the Repository class using the model as a param
class AppointmentsRepository extends Repository<Appointment> {
  // always when you create an async function, the return will be a promise
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
